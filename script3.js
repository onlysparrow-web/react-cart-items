const a = [
    {
      id: 1,
      name: "product1",
      qty: 0,
    },
    {
      id: 2,
      name: "product2",
      qty: 0,
    },
    {
      id: 3,
      name: "product3",
      qty: 0,
    },
    {
      id: 4,
      name: "product4",
      qty: 0,
    },
    {
      id: 5,
      name: "product5",
      qty: 0,
    },
    {
      id: 6,
      name: "product6",
      qty: 0,
    },
  ];
  // var cart;
  const b = a[2];
  var ele1 = document.getElementById("firstbutton");
  ele1.addEventListener("click", pushfunction1);
  function pushfunction1() {
    var v=parseInt(prompt("Enter the id number"));
  }
  var c = a[4];
  var ele2 = document.getElementById("secondbutton");
  ele2.addEventListener("click", pushfunction2);
  function pushfunction2() {
    c.qty = c.qty + 1;
  }
  var ele3 = document.getElementById("cartbutton");
  ele3.addEventListener("click", callcart);
  var products = [b, c];
  function callcart() {
    cart = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].qty > 0) {
        cart.push(products[i]);
      }
    }
    console.log(cart);
    //   console.log(cart[0].id);
  }
  var ele4 = document.getElementById("removeitem2");
  ele4.addEventListener("click", remove2);
  
  var ele5 = document.getElementById("removeitem5");
  ele5.addEventListener("click", remove5);
  
  function remove2() {
    b.qty = 0;
  }
  function remove5() {
    c.qty = 0;
  }
  function idselector() {
  
  for(let i=0; i<=a.length; i++){
    if(a[i][id]==v)
  }
  
  
  
  
  }
  