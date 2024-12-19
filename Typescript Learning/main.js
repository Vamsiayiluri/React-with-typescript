"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "good morning";
console.log(message);
var name = "John";
var age = 30;
var isActive = true;
console.log("Name: ".concat(name, ", Age: ").concat(age, ", Active: ").concat(isActive));
var numbers = [1, 2, 3, 4];
var names = ["Alice", "Bob", "Charlie"];
numbers.push(5);
console.log(numbers);
var check = null;
console.log(check);
var person = ["Alice", 25];
console.log("Name: ".concat(person[0], ", Age: ").concat(person[1]));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor);
var randomvariable = null;
randomvariable = 20;
console.log(randomvariable);
randomvariable = "good";
console.log(randomvariable);
var a;
a = 10;
a = true;
var b = 27;
console.log(b);
b = true;
console.log(b);
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
function adds(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(adds(5));
var user = { id: 1, name: "John" };
console.log(user);
function sample(user) {
    console.log(user.name);
}
sample(user);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, Good Morning ".concat(this.employeName));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manager) {
        return _super.call(this, manager) || this;
    }
    Manager.prototype.delegateWorks = function () {
        console.log('manager delegating works');
    };
    return Manager;
}(Employee));
var emp = new Employee('Vamsi');
emp.greet();
var mng = new Manager('Mahender');
mng.delegateWorks();
mng.greet();
