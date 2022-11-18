const studyCombo = {
  name: "pen",
  color: "red",
  qty: 12,
  lead: "0.5mm",
}

const addTable = function (currentTable) {
  const itemList = document.createElement("list");
  itemList.innerHTML = `
  <ul>
    <li>${studyCombo.name}</li>
    <li>${studyCombo.color}</li>
    <li>${studyCombo.qty}</li>
    <li>${studyCombo.lead}</li>
  </ul>
`;
  return itemList;
};

const main = document.querySelector("main");
main.append(addTable());


const myArray = [1, 2, 3, 4]
myArray.forEach( (item, index) => {
  console.log(index, item);
    myArray[index] = ++item;
    

});
console.log(myArray.length);