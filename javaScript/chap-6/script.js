import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "08th Nov 2022"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("The dateAcquired value:", everydayPack.dateAcquired);
console.log("The Acquired value:", everydayPack.backpackAge());

const contentHtml = `
<main>
      <article>
        <h1>Everyday Backpack</h1>
        <ul>
          <li>Volume: ${everydayPack.name}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>Age: ${everydayPack.backpackAge()}</li>
          <li>Number of pockets: ${everydayPack.pocketNum}</li>
          <li>Left strap length: ${everydayPack.strapLength.left}</li>
          <li>Right strap length: ${everydayPack.strapLength.right}</li>
          <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
      </article>
    </main>
`;
document.body.innerHTML = contentHtml;