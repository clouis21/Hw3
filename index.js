




/* Functon is used to generate table by receiving four in puts from user.
A starting row value a1 end value b1. Starting column value c1 end value d1.
*/
function multiplyTable_1(a1,b1,c1,d1) {
  var table1 = document.getElementsByTagName("TABLE")[0];

  var descendants = document.getElementsByTagName('tbody')[0];//.getElementsByTagName("*");
  console.log(descendants);
  descendants.remove();

  // each value is innitialize in table
  console.log(table1);
  row = table1.insertRow(-1);
  row.insertCell(-1).textContent=a1;
  row.insertCell(-1).textContent=b1;
  row = table1.insertRow(-1);
  row.insertCell(-1).textContent=c1;
  row.insertCell(-1).textContent=d1;
}

    function multiplyTable(a1,b1,c1,d1) {
      a1 = parseInt(a1);//Parsint ensure input values are neterd as numerical integer
      b1 = parseInt(b1);
      c1 = parseInt(c1);
      d1 = parseInt(d1);
      //Establishes table first position value. Fucus return cusor to opropriate field to be inputed
      var table1 = document.getElementsByTagName("TABLE")[0];
     var para1 = document.getElementById("para");
    if(a1 > b1){ //Ensures end valus is not less than starting value for colums
      document.getElementById('para1').innerHTML = "First Column Number Greater Than Second";
      document.getElementById("a").focus();
      return;
    }//Ensures values is not greater than or less than the table limit |50|
      if(a1 < -50 || a1 > 50){ 
        document.getElementById('para1').innerHTML = "First Column Number Out of Bound";
        document.getElementById("a").focus();
        return;
      }
      if(b1 < -50 || b1 > 50){ 
        document.getElementById('para2').innerHTML = "Second Column Number Out of Bound";
        document.getElementById("b").focus();
        return;
      }
      if(c1 > d1){//Ensures end valus is not less than starting value for rows
        document.getElementById('para1').innerHTML = "First Column Number Greater Than Second";
        document.getElementById("c").focus();
        return;
      }
      if(c1 < -50 || c1 > 50){ 
        document.getElementById('para3').innerHTML = "First Row Number Out of Bound";
        document.getElementById("c").focus();
        return;
      }
      if(d1 < -50 || d1 > 50){ 
        document.getElementById('para4').innerHTML = "Second Row Number Out of Bound";
        document.getElementById("d").focus();
        return;
      }
      //Prior to append descendants.remove() remove prior values from table

      descendants = document.getElementsByTagName('tbody')[0];
      console.log(descendants);
      descendants.remove();

      console.log(d1.value);
      console.log(d1);
      console.log(table1);
     
      /*Loops check for condition of table bound for starting columns based
      on inputed values then multiply the coresponding rows and columns then append to 
      table each value */
      console.log(table1);
      row = table1.insertRow();
      for (let y = c1; y <= d1; y++) {
        if(y === c1 ){
          row.insertCell().textContent='';
        }
        row.insertCell().textContent=y;
        
      }
      for (let x = a1; x <= b1; x++) {
        row = table1.insertRow();
        row.insertCell().textContent = x;
        for(let y=c1; y<=d1; y++){
          row.insertCell().textContent = x*y;
        }
      }
      console.log(table1);

    }
    multiplyTable(1,10,1,10)


      









    const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const input1 = document.getElementById('a');
  input1.value = '';
});

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const input1 = document.getElementById('b');
  input1.value = '';
});
btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const input1 = document.getElementById('c');
  input1.value = '';
});
btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const input1 = document.getElementById('d');
  input1.value = '';

});