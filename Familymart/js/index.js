  const newproducts = [
    {
      id: 1,
      image: "../image/sp1.jpg",
      category: "cháo",
      name: "Cháo nấm đùi gà",
      price: 19990,
    },
    {
      id: 2,
      image: "../image/sp2.jpg",
      category: "cơm nắm",
      name: "Cơm nắm tép sấy",
      price: 29999,
    },
    {
      id: 3,
      image: "../image/sp3.jpg",
      category: "mì",
      name: "Mì xá xíu hoành thánh tôm thịt",
      price: 24999,
    },
    {
      id: 4,
      image: "../image/sp4.jpg",
      category: "dimsum",
      name: "Dimsum tôm thịt",
      price: 39999,
    },
    {
      id: 5,
      image: "../image/sp1.jpg",
      category: "Túi xách",
      name: "Túi xách da thật",
      price: 49999,
    },
    {
      id: 6,
      image: "../image/sp1.jpg",
      category: "Áo",
      name: "Áo khoác nam",
      price: 59999,
    },
    {
      id: 7,
      image: "../image/sp1.jpg",
      category: "Giày",
      name: "Giày thể thao nữ",
      price: 44999,
    },
    {
      id: 8,
      image: "../image/sp1.jpg",
      category: "Túi xách",
      name: "Túi xách đựng laptop",
      price: 69999,
    },
  ];
  const hightlightproducts = [
    {
      id: 9,
      image: "../image/sp5.png",
      category: "banhmi",
      name: "banhmi hoacuc",
      price: 19999,
    },
    {
      id: 10,
      image: "../image/sp6.png",
      category: "Quần",
      name: "Quần jean nam",
      price: 29999,
    },
    {
      id: 11,
      image: "../image/sp7.png",
      category: "Áo",
      name: "Áo sơ mi nữ",
      price: 24999,
    },
    {
      id: 12,
      image: "../image/sp8.png",
      category: "Giày",
      name: "Giày thể thao",
      price: 39999,
    },
    {
      id: 13,
      image: "../image/sp1.jpg",
      category: "Túi xách",
      name: "Túi xách da thật",
      price: 49999,
    },
    {
      id: 14,
      image: "../image/sp1.jpg",
      category: "Áo",
      name: "Áo khoác nam",
      price: 59999,
    },
    {
      id: 15,
      image: "../image/sp1.jpg",
      category: "Giày",
      name: "Giày thể thao nữ",
      price: 44999,
    },
    {
      id: 16,
      image: "../image/sp1.jpg",
      category: "Túi xách",
      name: "Túi xách đựng laptop",
      price: 69999,
    },
  ];


  function addCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Sử dụng toán tử "hoặc" để thiết lập giá trị mặc định là một mảng rỗng nếu không có dữ liệu trong localStorage
    let product = [...newproducts, ...hightlightproducts].find(item => item.id === id);

    let indexCart = cart.findIndex(x=>x.id == id)
    if(indexCart !== -1){
      cart[indexCart].quantity +=1
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Đã cập nhật"); 
    } else {
    
      let updateCart = [...cart,{...product,quantity : 1}];
      localStorage.setItem("cart", JSON.stringify(updateCart));
      console.log("Đã thêm sản phẩm vào giỏ hàng."); 
    }
  }




  function renderProduct(products, containerId) {
    let element = "";
    for (let i = 0; i < products.length; i++) {
      element += `
        <div class="product">
          <img src="${products[i].image}" alt="${products[i].name}">
          <h5 style="color: rgb(118, 129, 129);">${products[i].category}</h5>
          <hr style="width: 50px;">
          <h3 style="text-transform: uppercase; color: rgb(52, 93, 170); white-space: nowrap;
              overflow: hidden; text-overflow: ellipsis; width: 300px;">${products[i].name}</h3>
          <h2>${products[i].price}đ</h2>
          <button class="button" onClick="addCart(${products[i].id})">Add to cart</button>
        </div>
      `;
    }
    document.getElementById(containerId).innerHTML = element;
  }

  const newProductsToShow = newproducts.slice(0, 4);
  const highlightProductsToShow = hightlightproducts.slice(0, 4);

  renderProduct(newProductsToShow, "newproducts");
  renderProduct(highlightProductsToShow, "hightlightproducts");