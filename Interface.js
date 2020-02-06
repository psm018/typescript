"use strict";
exports.__esModule = true;
function printPersondetails(pDetails) {
    return pDetails.firstName + " " + pDetails.lastName + ", " + pDetails.Address;
}
var p = {
    firstName: "Prashant",
    lastName: "Malegaonkar",
    Address: "Pune"
};
var str;
str = printPersondetails(p);
console.log(str);
var p1 = {
    firstName: "Prashant",
    lastName: "Malegaonkar"
};
str = printPersondetails(p1);
console.log(str);
