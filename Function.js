"use strict";
exports.__esModule = true;
function sum(num1, num2) {
    if (num2 != undefined)
        return num1 + num2;
    else
        return num1;
}
console.log(sum(4, 5));
console.log(sum(5));
function sum1(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2 != undefined)
        return num1 + num2;
    else
        return num1;
}
console.log(sum1(14, 5));
console.log(sum1(5));
