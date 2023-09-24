




var originalString = "Hello, World!";


var lowercaseString = originalString.toLowerCase();


console.log(lowercaseString); 


//Q



var stringArray = ["Hello", "World", "JavaScript"];

var lowercaseString;

lowercaseString = stringArray[0].toLowerCase();

document.write(lowercaseString);
  

//Q


var myString = "hello";

var uppercaseString = myString.toUpperCase();

alert(uppercaseString);


//Q



var cityName = "kaRacHi";


var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName); 


///Q


let sameWords = "captain";
let slice = sameWords.slice(1, 3); 
console.log(slice); 

//Q



const random = Math.random();

const randomNumberInRange = Math.floor(random * 50) + 1;

console.log(randomNumberInRange);

//Q


var text ="my name is sami  i am a js developer";
for(var i= 0; i<text.length; i++){
if (text.slice(i,i+4)==="sami")


console.log(text)
}


//Q


var num=2.5;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.log(num));

//Q




var username ="The code loops through the string looking for World War II Line 2 progresse"

for( var i = 0; i  <username.length; i++){
if (username.slice(i, i + 24) === "string looking for World"){
  username= username.slice(0 ,i) +  "sami sami "  + username.slice(i + 24)
}
}console.log(username)

//Q



var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) 
 if (str.slice(i, i + 2) === "  ") {
 alert("No double spaces!");
 break;

//Q



var city = prompt("Enter Your City Name");
city=city.toLowerCase();
var arr=["karachi","hyderabad","lahore","panjab","islamabad"];
 var  flage = false;

for(var i = 0; i <arr.length; i++){
  
  if(city===arr[i]){
  flage = true;
  }
}
if(flage){
  console.log(city)
  }else{
    console.log("not match")
  }

//Q



var city = prompt("Enter Your City Name");
city=city.toUpperCase();
var arr=["karachi","hyderabad","lahore","panjab","islamabad"];
 var  flage = false;

for(var i = 0; i <arr.length; i++){
  
  if(city===arr[i]){
  flage = true;
  }
}
if(flage){
  console.log(city)
  }else{
    console.log("not match")
  }

 }
