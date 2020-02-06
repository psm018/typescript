export {};
let isFixed: boolean = false;
let num: number = 10;
let name: string = "PSM";
let multiLine: string = `my name is ${name} , 
I am beginner in typescript`;
//
console.log(isFixed);
console.log(multiLine);

//null is an assigned value. It means nothing.
//undefined means a variable has been declared but not defined yet.
//null is an object. undefined is of type undefined.
//null !== undefined but null == undefined.

let Flag: boolean = null;
let Flag1: boolean = undefined;

console.log("Flag : " + Flag);
console.log("Flag1 : " + Flag1);

let n: null = null;
let u: undefined = undefined;

console.log("n : " + n);
console.log("u : " + u);

let Flag2: boolean;
console.log("Flag2 :", Flag2); // undefined means a variable has been declared but not defined yet
//Value is not assigned
//console.log("undefined flag3 :" + Flag3); // Complie time error
