const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];
let pro = {};
listOfProducts.forEach((el) => {
  pro[el.productName] = (pro[el.productName] || 0) + 1;
});

let sum = listOfProducts.reduce(function (acc, curr) {
  let findIndex = acc.findIndex(
    (item) => item.productName === curr.productName
  );

  if (findIndex === -1) {
    acc.push(curr);
  } else {
    acc[findIndex].quantity += curr.quantity;
  }
  return acc;
}, []);

var str = JSON.stringify(pro);
var res = JSON.stringify(sum);

document.getElementById("display").innerHTML = str;
document.getElementById("demo").innerHTML = res;

console.log(sum);
console.log(pro);
