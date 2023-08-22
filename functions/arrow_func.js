// Arrow Functions

const add = (a,b) => a+b;
console.log("sum of a and b is",add(5,8));

const great = () =>"hello";
console.log(great());

const person = (name,age) => ((name,age));
console.log(person('varna',20));

// map

const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num*2);
console.log(doubled);
  
const books = [
    {id:1,title:"The great",author:"F.Scott"},
    {id:2,title:"The Blind",author:"william"},
    {id:3,title:"The hobbit",author:"Tolkien"},
]

const bookTitles = books.map(book => book.title);
console.log(bookTitles);

// reduce

// const values = [45,50,55];
// const x = values.reduce(myFunc)
// console.log(x)
// function myFunc(total,num){
//     console.log("total :"+total)
//     console.log("num:",num)
//   return total-num;
// }

const nums = [23,14,78,52,13];
const maxNumber = nums.reduce((max,current)=>(current>max ? current:max),nums[0]);
console.log("max value = ",maxNumber);

const items = [6,9,7,8];
const sum = items.reduce((total,num)=>total+num,0);
console.log("sum :",sum)