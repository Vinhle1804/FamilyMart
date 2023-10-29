const cart = JSON.parse(localStorage.getItem("cart")) || [];

function tinhtongtien() {
  let total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toLocaleString() + "đ";
  document.getElementById("totall").innerHTML = total;
}

function removeCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    tinhtongtien();
  }
}

function renderCart() {
  let element = "";
  for (let i = 0; i < cart.length; i++) {
    element += `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${cart[i].image}" alt="Product 1"></td>
        <td>${cart[i].name}</td>
        <td>${cart[i].price.toLocaleString()}đ</td>
        <td><input type="number" class="quantity" value="${cart[i].quantity}" data-product-id="${cart[i].id}" onchange="updateQuantity(${i}, this.value)"></td>
        <td>${(cart[i].price * cart[i].quantity).toLocaleString()}đ</td>
        <td><button class="button" onClick="removeCart(${cart[i].id})"><i class='bx bx-trash'></i></button></td>
      </tr>
    `;
  }

  document.getElementById("cartlist").innerHTML = element;
}

function updateQuantity(index, newQuantity) {
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  cart[index].quantity = parseInt(newQuantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  tinhtongtien();
}

renderCart();
tinhtongtien();
