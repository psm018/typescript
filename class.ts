export {};
class vehicle {
  protected vehicleName: string;
  constructor(vName: string) {
    this.vehicleName = vName;
  }
  print() {
    console.log("print");
    console.log(`I have ${this.vehicleName} car`);
  }
}

let v = new vehicle("Verna");
v.print();

class features extends vehicle {
  constructor(color: string) {
    super(color);
  }
  CarNo(carNo: string) {
    console.log("My car no is : " + carNo);
  }
}

let f = new features("Black");
f.CarNo("TY - 0789");
f.print();
console.log(f.vehicleName);
