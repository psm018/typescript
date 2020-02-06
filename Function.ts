export {};
function sum(num1: number, num2?: number): number {
  if (num2 != undefined) return num1 + num2;
  else return num1;
}

console.log(sum(4, 5));
console.log(sum(5));

function sum1(num1: number, num2: number = 20): number {
  if (num2 != undefined) return num1 + num2;
  else return num1;
}

console.log(sum1(14, 5));
console.log(sum1(5));
