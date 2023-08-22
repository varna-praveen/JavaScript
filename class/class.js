// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const myCar = new Car("Ford", 2014);
// console.log("My Car is " + myCar.age() + " years old");

// class MyClass{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log(`Hello , my name is ${this.name}, and my age is ${this.age}`);
//     }
// }
// const person = new MyClass('varna',20);
// person.sayHello();

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        const area = Math.PI*this.radius*this.radius;
        console.log("Area of Circle is", +area);
    }
}
const circleArea = new Circle(5);
circleArea.area();