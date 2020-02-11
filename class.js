"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var vehicle = /** @class */ (function () {
    function vehicle(vName) {
        this.vehicleName = vName;
    }
    vehicle.prototype.print = function () {
        console.log("print");
        console.log("I have " + this.vehicleName + " car");
    };
    return vehicle;
}());
var v = new vehicle("Verna");
v.print();
var features = /** @class */ (function (_super) {
    __extends(features, _super);
    function features(color) {
        return _super.call(this, color) || this;
    }
    features.prototype.CarNo = function (carNo) {
        console.log("My car no is : " + carNo);
    };
    return features;
}(vehicle));
var f = new features("Black");
f.CarNo("TY - 0789");
f.print();
console.log(f.vehicleName);
