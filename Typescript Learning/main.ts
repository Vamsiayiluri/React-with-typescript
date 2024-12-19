export {}
let message= "good morning"
console.log(message)

let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}`);

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

numbers.push(5);
console.log(numbers);

let check:null=null;

console.log(check)


let person: [string, number] = ["Alice", 25];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

enum Color {
    Red,
    Green,
    Blue,
  }
  
  let favoriteColor: Color = Color.Green;
  console.log(favoriteColor); 

let randomvariable: any =null
randomvariable=20
console.log(randomvariable)
randomvariable="good"
console.log(randomvariable)

let a;
a=10
a=true

let b: Number | Boolean =27
console.log(b)

b=true
console.log(b)

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 3));

  function adds(a: number, b?: number): number {
    if(b){
        return a + b;`  q`
    }
    else{
        return a
    }
  }
  
  console.log(adds(5));
  
  
  interface User {
    id: number;
    name: string;
    isActive?: boolean;
  }
  
  let user: User = { id: 1, name: "John" };
  console.log(user);

  function sample(user : User){
    console.log(user.name)
  }
  sample(user)
  
class Employee {
    employeName:String
    constructor(name: String){
        this.employeName=name

    }
    greet(){
        console.log(`Hello, Good Morning ${this.employeName}`)
    }

}
class Manager extends Employee {
    constructor(manager: String){
        super(manager)
    }
    delegateWorks(){
        console.log('manager delegating works')
    }

}
let emp = new Employee('Vamsi')

emp.greet()

let mng = new Manager('Mahender')

mng.delegateWorks()
mng.greet()
  