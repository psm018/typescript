export {};
interface PDetails {
  firstName: string;
  lastName: string;
  Address?: string;
}

function printPersondetails(pDetails: PDetails): string {
  return pDetails.firstName + " " + pDetails.lastName + ", " + pDetails.Address;
}

let p = {
  firstName: "Prashant",
  lastName: "Malegaonkar",
  Address: "Pune"
};

let str: string;
str = printPersondetails(p);

console.log(str);

let p1 = {
  firstName: "Prashant",
  lastName: "Malegaonkar"
};

str = printPersondetails(p1); // called using option para

console.log(str);
