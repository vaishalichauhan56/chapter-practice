let arrayLst = ["45", 1, "Name"];
console.log(arrayLst);

arrayLst.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

let remove = "Name";
arrayLst.splice(arrayLst.indexOf(remove), 2);
console.log(`remove: "${remove}"`, arrayLst);
