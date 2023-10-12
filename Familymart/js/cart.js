const cart = JSON.parse(localStorage.getItem("cart")) || [];

function tinhtongtien(){
  let total = cart.reduce((acc,curr) => acc + curr.quantity* curr.price,0)
  document.getElementById("totall").innerHTML = total;
}


function renderCart() {
  let element = "";
  for (let i = 0; i < cart.length; i++) {
    element += `
      <tbody id="cartlist">
        <tr>
          <td>1</td>
          <td><img src="${cart[i].image}" alt="Product 1"></td>
          <td>${cart[i].name}</td>
          <td>${cart[i].price.toLocaleString()}đ</td>
          <td><input type="number" class="quantity" value="${cart[i].quantity}"></td>
          <td>${(cart[i].price * cart[i].quantity).toLocaleString()}đ</td>
          <button class="button" onClick="removeCart(${cart[i].id})">removecart</button>
          </tr>
      </tbody>
    `;
  }

  document.getElementById("cartlist").innerHTML = element;
}

renderCart();
tinhtongtien();