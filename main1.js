//const { use } = require("react");

const testing = function (callback)
{
callback();
}
testing(function(){
    console.log("check Result");
}
)
const callResult = function(x, y, callback){
    return x+y;
}
const vlaue =callResult(3, 4, function(x, y)
{
    return x+y;
})
console.log(vlaue);
//HOF //highrer order function
const array = ["item1", "item2", "item3"];
const new_array= array.forEach(function(element, index){
   // console.log(element, "for Index", index);
  return element ;
})


const new_other= array.map(function(elem, i){
   // console.log(element, "for Index", index);
  return elem ;
})

const filteration = array.filter(function(element, indes){
    return element=="item1";

})
console.log(filteration);

const numbers = [43, 45, 45, ,56,67];
numbers.reduce(function(accumlate, number, index){
    console.log(accumlate);
    console.log(number);
    return accumlate+number;
})

console.log("---------------")
numbers.push(22);
numbers.pop()
numbers.unshift(111)
numbers.shift()
console.log("number array " +numbers)
numbers.reverse(numbers);
console.log("-----------");
console.log("number array " +numbers)
const numShow = numbers.join(" ");
console.log("Number Show "+numShow)
const newShow= numShow.split(" ")
console.log("old Array "+ newShow)
console.log("Array length "+numbers.length)

console.log("------OBJECT-----")
const object = {
    key : "value", 
}

const user = {
    name : "Joud",
    email : "joud@1234",
    password : "1234",
    fav: {
        name: "item",
        category: "Cat"
    } 
}
console.log("Name: ", user.name);
console.log("Email: ", user.email);
console.log("Password: ", user.password);
console.log("-------------");
//brackets
console.log("Email: ", user["email"]);
console.log("Name", user["password"]);
user.email = "OMAR@0000.com";
user.name = "OMAR";
console.log("User new data ",user);
console.log("User.fav.category", user.fav.category)
 console.log("---Factory Function---");
  
 const register = function(name, email, password){
   return{
     name,
    email,
    password

   }
 }
 const user1 = register("Karam", "Karam@123", "2222");
 console.log("User1: ", user1);
 console.log("---Iteration in JS---");

let step = 0; // starting point
//WHILe
while(step<5){
    console.log("Step: ",step);
    step ++;
    // or step+=1 / step =step+1
}
console.log("-----------")

for(let step = 5; step >=0 ; step--){
    console.log("Step: ",step);

} 
const recursion =function (num){
if(num==0){
   return console.log("This is the number ");

}
return recursion(num-1);
}
recursion(5)
