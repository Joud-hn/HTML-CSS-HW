console.log("Hello World");
// number
console.log(typeof 123)
//String
console.log(typeof "1aaa");
console.log("Joud"+"Nassar");
// variable 
const email = "joud@gmail.com";

let password = "123";
//password = "change123"
var name ="joud";
const result = 25 + ((5-4)* 8);
console.log("result" ,result)
//decleration
function name(){
    console.log("Check this workoing func");
}
name;
//expression
const assignmentForSteepsBasedOnOp = function (){
    console.log("Check again expression func");

}
//assignment();

const count= function(number){
    console.log("increase", number+1);
}
count(5);
const naming =function(name){
    return "Welcome"+":" + name;
}
const nweName= naming("Joud");
console.log(nweName)

//premativ
let a = 5;
let b = a;
a = 7;
console.log("b", b); //dosent change it is copaied feom a =5

//grater than >
// smaller than <
//grater or equal >=
// smaller or equal <=
// equal == (value) ===(value and data type)
/* not equal !== */

//logical operater 
// AND OR NOT
// && ||  !



console.log("----------"); 
console.log("----------"); 
console.log("----------"); 
let globalValue = 15; 
const reAssign = function (num){
    const value =5;    
    globalValue=55;             //local scope
    return num +value+ globalValue;

}
const val =reAssign(55);
console.log ("reAssaign Value::",val);  
 //console.log(num); //not define cause the variable is in the local scope
console.log ("reAssaign Global Value::",globalValue); 


console.log("----------"); 
console.log("----------"); 
console.log("----------"); 

/* const valuenew = "OFF";
const toggle = function (vall){
    if (vall=="OFF"){
        vall == "ON";
    }else{
        vall=="OFF";
    }
    return vall;
}
toggle("OFF");
toggle("ON");
console.log(toggle("OFF"));
console.log(toggle("ON"));
*/

// Local
const switchFun = function(vall){
    const valuenew="OFF";
return function(){
      if (vall==valuenew){
        return vall;
    }else{
     vall=="OFF";
    }
    return vall;
}
}
const checkToggle = switchFun("OFF");
console.log(checkToggle());
console.log(checkToggle());
console.log(checkToggle());
console.log(checkToggle());

