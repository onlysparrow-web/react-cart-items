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
var ele1 = document.getElementById("firstbutton");
ele1.addEventListener("click", idselect);

function idselect() {
  var v = parseInt(prompt("Enter the id number"));
  a.find((p) => p.id == v).qty++;
  updateCart();
}
var ele3 = document.getElementById("cartbutton");
// ele3.addEventListener("click", console.log(cart));
function updateCart() {
  cart = [];
  a.filter((p) => p.qty > 0).forEach((q) => cart.push(q));
}
var ele4 = document.getElementById("removeitem2");
ele4.addEventListener("click", removeItem);

function removeItem() {
  var v = parseInt(prompt("Enter the id number"));
  a.find((p) => p.id == v).qty = 0;
  updateCart();
}
