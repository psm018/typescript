"use strict";
exports.__esModule = true;
//behaviour of any and unknow is almost same
//any can directly control convert to any data type
//unknow need to type casting 1st to specifc data type useing typeof, then access property
//unknown which is the type - safe counterpart of any.Anything is assignable to unknown,
//but unknown isn't assignable to anything but itself and any without a type assertion or
//a control flow based narrowing. Likewise, no operations are permitted on an unknown
//without first asserting or narrowing to a more specific type.
var a = 10;
a = "psm";
console.log("a : ", a);
console.log("a.ucase ", a.toUpperCase());
var u = 20;
u = "psm";
console.log("u : ", u);
console.log("u-ucase : ", u.toUpperCase()); //convert to string then use method
var multi;
multi = "pune";
multi = 34;
console.log("multi : ", multi.toString().toUpperCase()); // have to convert boz last value was int
multi = "finiq";
console.log("multi : ", multi.toUpperCase()); // not rrequired to convert
