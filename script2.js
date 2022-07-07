const a = [
  {
    id: 1,
    name: "product1",
    qty: 1,
  },
  {
    id: 2,
    name: "product2",
    qty: 1,
  },
  {
    id: 3,
    name: "product3",
    qty: 1,
  },
  {
    id: 4,
    name: "product4",
    qty: 1,
  },
  {
    id: 5,
    name: "product5",
    qty: 1,
  },
  {
    id: 6,
    name: "product6",
    qty: 1,
  },
];
// console.log(a[3]["qty"]);
const b = [];
const cart = [];
var j = 0;
var ele1 = document.getElementById("firstbutton");
console.log(a[1]);
ele1.addEventListener("click", pushfunction1);
function pushfunction1() {
  //   console.log(a[1]);
  if (b.length == 0) {
    b.push(a[1]);
    cart.push(b[0]);
    console.log(b);
  } else {
    b[0]["qty"]++;
  }
  //   console.log(b[0]["id"]);
  //   filtering();
}
var c = [];
var ele2 = document.getElementById("secondbutton");
console.log(a[5]);
ele2.addEventListener("click", pushfunction2);
function pushfunction2() {
  //   console.log(a[4]);
  //   b.push(a[4]);
  //   console.log(b);
  if (c.length == 0) {
    c.push(a[4]);
    cart.push(c[0]);
    console.log(b);
  } else {
    c[0]["qty"]++;
  }
  //   filtering();
}
var ele3 = document.getElementById("cartbutton");
ele3.addEventListener("click", callcart);
function callcart() {
  console.log(cart);
}

// function filtering() {
//   for (let i = 0; i < b.length; i++) {
//     result = b.keys[b.filter(check)];
//     function check(c) {
//       return b[c]["id"] == 2;
//     }
//   }
// }

//   for (i = 0; i < b.length; i++) {
//     if (b[i]["id"] == 2) {
//       addone();
//       function addone() {
//         b[i]["qty"] = j + 1;
//         j = b[i]["qty"];
//       }
//     }
//     // var y = oneThanOne;
//     else if (b[i]["id"] == 5) {
//       // var z = twoMoreThanTwo;
//     }
//   }
