// buttons
// const Shirts = document.getElementById("shirts");
const Shoes = document.getElementById("shoes");
const Heels = document.getElementById("heels");
const Sweater = document.getElementById("sweaters");
const All = document.getElementById("all");
// all group element
// const allShirt = document.getElementById("shirt");
const allShoe = document.getElementById("shoe");
const allShoe1 = document.getElementById("shoe1");
const allShoe2 = document.getElementById("shoe2");
const allHeel = document.getElementById("heel");
const allSweater = document.getElementById("sweater");
const allSweater1 = document.getElementById("sweater1");

Heels.addEventListener("click", function (e) {
  Sweater.classList.remove("button");
  Shoes.classList.remove("button");
  Heels.classList.add("button");
  All.classList.remove("button");
  allShoe.classList.add("gone");
  allShoe1.classList.add("gone");
  allShoe2.classList.add("gone");
  allSweater.classList.add("gone");
  allSweater1.classList.add("gone");
  allHeel.classList.remove("gone");
});
Shoes.addEventListener("click", function (e) {
  Sweater.classList.remove("button");
  Heels.classList.remove("button");
  All.classList.remove("button");
  Shoes.classList.add("button");
  allShoe.classList.remove("gone");
  allShoe1.classList.remove("gone");
  allShoe2.classList.remove("gone");
  allSweater.classList.add("gone");
  allSweater1.classList.add("gone");
  allHeel.classList.add("gone");
});
Sweater.addEventListener("click", function (e) {
  Sweater.classList.add("button");
  Heels.classList.remove("button");
  All.classList.remove("button");
  Shoes.classList.remove("button");
  allShoe.classList.add("gone");
  allShoe1.classList.add("gone");
  allShoe2.classList.add("gone");
  allSweater.classList.remove("gone");
  allSweater1.classList.remove("gone");
  allHeel.classList.add("gone");
});

All.addEventListener("click", function (e) {
  Sweater.classList.remove("button");
  Heels.classList.remove("button");
  All.classList.add("button");
  Shoes.classList.remove("button");
  allShoe.classList.remove("gone");
  allShoe1.classList.remove("gone");
  allShoe2.classList.remove("gone");
  allSweater.classList.remove("gone");
  allSweater1.classList.remove("gone");
  allHeel.classList.remove("gone");
});

//  best buy
// buttons
const bShirts = document.getElementById("bshirts");
const bShoes = document.getElementById("bshoes");
const bSweater = document.getElementById("bsweaters");
const bAll = document.getElementById("ball");
// const Heels = document.getElementById("heels");
// all group element
const ballShirt = document.getElementById("bshirt");
const ballShoe = document.getElementById("bshoe");
const ballShoe1 = document.getElementById("bshoe1");
const ballSweater = document.getElementById("bsweater");
// const allShoe2 = document.getElementById("shoe2");
// const allHeel = document.getElementById("heel");

bShirts.addEventListener("click", function (e) {
  bShirts.classList.add("button");
  bSweater.classList.remove("button");
  bAll.classList.remove("button");
  bShoes.classList.remove("button");
  ballShoe.classList.add("gone");
  ballShoe1.classList.add("gone");
  ballSweater.classList.add("gone");
  ballShirt.classList.remove("gone");
});
bShoes.addEventListener("click", function (e) {
  bShirts.classList.remove("button");
  bSweater.classList.remove("button");
  bAll.classList.remove("button");
  bShoes.classList.add("button");
  ballShoe.classList.remove("gone");
  ballShoe1.classList.remove("gone");
  ballSweater.classList.add("gone");
  ballShirt.classList.add("gone");
});
bSweater.addEventListener("click", function (e) {
  bShirts.classList.remove("button");
  bSweater.classList.add("button");
  bAll.classList.remove("button");
  bShoes.classList.remove("button");
  ballShoe.classList.add("gone");
  ballShoe1.classList.add("gone");
  ballSweater.classList.remove("gone");
  ballShirt.classList.add("gone");
});
bAll.addEventListener("click", function (e) {
  bShirts.classList.remove("button");
  bSweater.classList.remove("button");
  bAll.classList.add("button");
  bShoes.classList.remove("button");
  ballShoe.classList.remove("gone");
  ballShoe1.classList.remove("gone");
  ballSweater.classList.remove("gone");
  ballShirt.classList.remove("gone");
});
