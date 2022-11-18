const arrayList = ['pen', 'pencile', 'eraser', 'scale'];

for (let x = 1; x <= arrayList.length; x++) {
  console.log(x);
}

arrayList.forEach(function (e, index) {
  console.log(index, e);
})
const arrayList1 = [5, 10, 15, 20, 25, 30];

arrayList1.forEach(function (val, index, vll) {
  console.log(val, vll[index] + 100);
});