const arr = []
const taxArray = [];
let salarySumm = 0;
for (let i = 0; i < 70; i++) {
  if (i < 5){
    arr.push(10000);
  }
  if (i > 4 && i < 20){
    arr.push(25000);
  }
  if (i > 19 && i < 60){
    arr.push(50000);
  }
  if (i > 59 && i < 70){
    arr.push(100000);
  }
}

for (let i = 0; i < arr.length; i++) {
  const arrSalary = arr[i];
  let tax = arrSalary * 20 / 100;
  taxArray.push(tax); 
  salarySumm+=taxArray[i];
}
console.log(`Средние налоговые отчисления с человека составили ${Math.floor(salarySumm / taxArray.length)} руб.`)
console.log(`Суммарные налоговые отчисления составили ${salarySumm} руб.`)
