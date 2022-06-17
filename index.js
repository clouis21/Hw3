
//Input value still takes default values. Need to update

/*
document.getElementById("myButton").onclick = function(){
  var myValue = document.getElementById("myText").value;
  console.log("This is the number", myValue)
var num1 = parseInt(a);
var num2 = parseInt(b);

var num3 = parseInt(c);
var num4 = parseInt(d);

var a = prompt("Enter column first Value", "Insert Min Col");
var b = prompt("Enter column second Value", "Insert Max Col");
var c = prompt("Enter row first Value", "Insert Min Row");
var d = prompt("Enterrow second Value", "Insert Max Row");
*/

const a = document.getElementById('num1').value;
let b = document.getElementById('num2').value;
var c = document.getElementById('num3').value;
var d = document.getElementById('num4').value;

var z = document.getElementById('num4');

console.log(z);
console.log(d);






function multiplyTable(num1,num2,num3,num4) {

  tbody = document.querySelector('tbody');
  result = '';
  row = tbody.insertRow();
  row.insertCell().textContent = '';//Leave first column empty
  for (let y = num3; y <= num4; y++) {
    
    if (y === c) {
      for (let x = num1; x <= num2; x++) {
        row.insertCell().textContent = x;
      }
    }
    row = tbody.insertRow();
  
    row.insertCell().textContent = y;
    for (let x = num1; x <= num2; x++) {
      row.insertCell().textContent = x * y;
    }
  }
  console.log('HELOOOOO');

}

console.log(num2);
console.log(num3);
console.log(num4);



multiplyTable(a,b,c,d);
console.log(document.getElementById('num1').value);


console.log(num1.value);







//To Do 


 
