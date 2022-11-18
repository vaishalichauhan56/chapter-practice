const backpack = {
    name: "caprese",
    volume: 25,
    sides: 5,
    color: "Red",
    pocketNum: 5,
    strapLength: {
        left: 25,
        right: 25,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthRight, lengthLeft) {
        this.strapLength.right = lengthRight;
        this.strapLength.left = lengthLeft;
    }
}
console.log(backpack);
document.write(JSON.stringify(backpack));
document.write(JSON.stringify(backpack.pocketNum));