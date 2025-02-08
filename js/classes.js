"use strict";

// Write a JavaScript program to create a class called "Person"
// with properties for name, age and country. Include a method
// to display the person's details. Create two instances of the
// 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

const user1 = new Person("Karina", 17, "Ukraine");
const user2 = new Person("Vitalii", 19, "Greece");

console.log("Person №1 information:")
user1.displayDetails();

console.log("\nPerson №2 information:")
user2.displayDetails();

// Write a JavaScript program to create a class called
// 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    console.log(`Area of the rectangle: ${this.width * this.height}`);
  }

  calcPerimeter() {
    console.log(
      `Perimeter of the rectangle: ${this.width * 2 + 2 * this.height}`
    );
  }
}

const rec1 = new Rectangle(12, 10);
const rec2 = new Rectangle(6, 15);

rec1.calcArea();
rec1.calcPerimeter();

rec2.calcArea();
rec2.calcPerimeter();

// Write a JavaScript program that creates a class called 'Vehicle'
// with properties for make, model, and year. Include a method to display
// vehicle details. Create a subclass called 'Car' that inherits from
// the 'Vehicle' class and includes an additional property for the number
// of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

const newVehicle = new Vehicle("Dacia", "Sandero", 2011);
const newCar = new Car("Renault", "Duster", 2024, 5);

console.log("Vehicle details:");
newVehicle.displayDetails();

console.log("\nCar details:");
newCar.displayDetails();

// Write a JavaScript program that creates a class called "BankAccount"
// with properties for account number and balance. Include methods to deposit
// and withdraw money from the account. Create some instances of the "BankAccount"
// class, deposit some money, and withdraw a portion of it.

class BankAcount {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
  }

  showDetails() {
    console.log(`Account number: ${this.number}`);
    console.log(`Account balance: ${this.balance}`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit amount: ${amount}`);
  }

  withdraws(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdraw amount: ${amount}`);
    }
  }

  showBalance() {
    console.log(`Your account balance: ${this.balance}`);
  }
}

const account = new BankAcount(5232456978512369, 2900);
account.showDetails();
account.deposit(2000);
account.withdraws(1000);
account.showBalance();

// Write a JavaScript program that creates a class called 'Shape'
// with a method to calculate the area. Create two subclasses, 'Circle'
//  and 'Triangle', that inherit from the 'Shape' class and override the
// area calculation method. Create an instance of the 'Circle' class and
// calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(radius, oneSide, twoSide) {
    this.radius = radius || 0;
    this.oneSide = oneSide || 0;
    this.twoSide = twoSide || 0;
  }

  calcCircleArea() {
    console.log(`Circle area: ${this.radius ** 2 * 3.14}`);
  }

  calcArea() {
    console.log(`Rectangle area: ${this.oneSide * this.twoSide}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius);
  }

  calcCircleArea() {
    super.calcCircleArea();
  }
}

class Rect extends Shape {
  constructor(oneSide, twoSide) {
    super(null, oneSide, twoSide);
  }

  calcArea() {
    super.calcArea();
  }
}

const newCircle = new Circle(7);
newCircle.calcCircleArea();

const newRect = new Rect(8, 9);
newRect.calcArea();

// Write a JavaScript program that creates a class called 'Employee'
// with properties for name and salary. Include a method to calculate
// annual salary. Create a subclass called 'Manager' that inherits
// from the 'Employee' class and adds an additional property for department.
// Override the annual salary calculation method to include bonuses for
// managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  annualSalary() {
    return this.salary * 12;
  }

  getDetails() {
    console.log(`\nEmployee's name is ${this.name}`);
    console.log(`Salary: ${this.annualSalary()}`);
  }
}

class Manager extends Employee {
  bonus = 0.1;

  constructor(name, salary, bonus, department) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus;
  }

  annualSalary() {
    const money = super.annualSalary();
    return this.bonus * money + money;
  }

  getDetails() {
    super.getDetails();
    console.log(`Department: ${this.department}`);
  }
}

const manager1 = new Manager("Pedro", 4000, 0.1, "IT");
const manager2 = new Manager("Ann", 10000, 0.2, "Project management");

manager1.getDetails();
manager2.getDetails();

// Write a JavaScript program that creates a class `Book` with properties
// for title, author, and publication year. Include a method to display book
// details. Create a subclass called 'Ebook' that inherits from the 'Book'
// class and includes an additional property for book price. Override the display
// method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getDetails() {
    console.log(`\nBook's title is ${this.title}`);
    console.log(`Book's author is ${this.author}`);
    console.log(`Publication year is ${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  getDetails() {
    super.getDetails();
    console.log(`Tha price of the ${this.title} book is ${this.price}`);
  }
}

const book1 = new Book("Influance", "Robert Chaldini", 1984);
book1.getDetails();

const book2 = new Ebook("Шдях до фінінсової свободи", "Бодо Шефер", 2018, 459);
book2.getDetails();

// Write a JavaScript program that creates a class called Bank with properties
//  for bank names and branches. Include methods to add a branch, remove a branch,
//  and display all branches. Create an instance of the Bank class and perform
// operations to add and remove branches.

class Bank {
  constructor(names, branches) {
    this.names = names;
    this.branches = branches;
  }

  addBranch(newBranch) {
    this.branches.push(newBranch);
  }

  removeBranch(oldBranch) {
    this.branches = this.branches.filter((branch) => branch !== oldBranch);
  }

  displayNames() {
    console.log(this.names.join(", "));
  }

  displayBranches() {
    console.log(this.branches.join(", "));
  }
}

const newBank = new Bank(
  ["Minecraft", "Roblox", "GTA"],
  ["UX", "UI", "Frontend", "Backend"]
);
newBank.addBranch("DevOps");
newBank.removeBranch("UI");
newBank.displayNames();
newBank.displayBranches();

// Write a JavaScript program that creates a class called Product with
// properties for product ID, name, and price. Include a method to
// calculate the total price by multiplying the price by the quantity.
//  Create a subclass called PersonalCareProduct that inherits from the
// Product class and adds an additional property for the warranty period.
// Override the total price calculation method to include the warranty period.
// Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    return quantity * this.price;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }

  totalPrice(quantity) {
    return (this.price + this.warranty) * quantity;
  }
}

const newProduct = new PersonalCareProduct(256, "Acer Aspire 5", 36_999, 1000);
console.log(`The total price of your product(s) is ${newProduct.totalPrice(2)}`);

// Write a JavaScript program that creates a class called University with properties
// for university name and departments. Include methods to add a department, remove
// a department, and display all departments. Create an instance of the University
// class and add and remove departments.

class University {
  constructor(name, departments) {
    this.name = name;
    this.departments = departments;
  }

  addDepartment(newDepartment) {
    this.departments.push(newDepartment);
  }

  removeDepartment(oldDepartment) {
    this.departments = this.departments.filter(
      (department) => department !== oldDepartment
    );
  }

  displayDepartments() {
    console.log(
      `${this.name}'s departments are: ${this.departments.join(", ")}`
    );
  }
}

const newUniversity = new University("JavaScript", [
  "String",
  "Number",
  "Boolean",
  "Short",
  "Array",
]);
newUniversity.addDepartment("Object");
newUniversity.removeDepartment("Short");
newUniversity.displayDepartments();
z