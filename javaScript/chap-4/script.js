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

// Simple output time example
console.log(1);
setTimeout(function () {
    console.log(2);
}, 1000);

setTimeout((function () {
    console.log(3);
    return () => {};
})(), 2000);
console.log(4);