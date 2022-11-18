import Backpack from "./Backpack.js";
import Book from "./Book.js";

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

const book1 = new Book(
    "book new",
    "author 1",
    1993,
    51,
    26,
    "finished"
);

console.log("The everydayPack object:", book1);
console.log("The everydayPack object:", book1);

