
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


const a = document.getElementById('num1').value;
let b = document.getElementById('num2').value;
var c = document.getElementById('num3').value;
var d = document.getElementById('num4').value;

var z = document.getElementById('num4');

console.log(z);
console.log(d);

var button1 = document.getElementById("theButton1"),
value =  button1.form.valueId.value;
button1.onsubmit = function() {
  multiplyTable1(value);
}
var button2 = document.getElementById("theButton2"),
value =  button2.form.valueId.value;
button2.onsubmit = function() {
  multiplyTable1(value);
}
var button3 = document.getElementById("theButton3"),
value =  button3.form.valueId.value;
button3.onsubmit = function() {
  multiplyTable1(value);
}

var button4 = document.getElementById("theButton4"),
value =  button4.form.valueId.value;
button4.onclick = function() {
  multiplyTablex(value);
}
console.log(button4);

function multiplyTablex(v){

 console.log(v.value);
}

multiplyTablex(button4)

/*
console.log(button1.value);
console.log(button2);
console.log(button3);
console.log(button4);




  console.log('HELOOOOO');

}

multiplyTable(button1,button2,button3, button4);
console.log(document.getElementById('theButton1').value);


console.log(button1.value);


    function add(a, b, c, d) {
      var sum = parseInt(a, 10) + parseInt(b, 10)
       + parseInt(c, 10) + parseInt(d, 10);
      alert(sum);
    }*/
  
    function multiplyTable(a,b,c,d) {

      tbody = document.querySelector('tbody');
      result = '';
      row = tbody.insertRow();
      row.insertCell().textContent = '';//Leave first column empty
      for (let y = c; y <= d; y++) {
        
        if (y === c) {
          for (let x = a; x <= b; x++) {
            row.insertCell().textContent = x;
          }
        }
        row = tbody.insertRow();
      
        row.insertCell().textContent = y;
        for (let x = a; x <= b; x++) {
          row.insertCell().textContent = x * y;
        }
      }
    }
    multiplyTable();

    
