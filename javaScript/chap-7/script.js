import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "08th Nov 2022",
  "demo-img.jpg"
);

const contentHtml = `
<article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" width="300"/>
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="backpack__color">Color:<span> ${everydayPack.color}</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;
const main = document.querySelector(".maincontent");
const mainNew = document.querySelector('.main ul');
const navBar = document.createElement("nav");
main.innerHTML = contentHtml;
navBar.classList.add("header");
navBar.setAttribute("id", "header");
main.append(navBar);

const target = document.querySelector(".first-paragraph");
target.style.font-family = "sans-serif";