var a = document.getElementById('num1').value;
var b = document.getElementById('num2').value;
var c = document.getElementById('num3').value;
var d = document.getElementById('num4').value;
//Input value still takes default values. Need to update
var x = b - a;
var y = d - c;

function generate(num, fn) {
  var array = Array(num), i = 0;
  while (i < num) array[i] = fn(i++);
  return array;
}

var entry = (x, y) => `${x * y}`;
var array2d = generate(x, row => generate(y, col => entry(row + 1, col + 1)));
var result = array2d.map(row => row.join(' | ')).join('\n');

console.log(result);


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
};

function genTable() {};
//To Do 


 
