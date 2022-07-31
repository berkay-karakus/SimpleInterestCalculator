function compute()
{
  var principal = Number(document.getElementById("principal").value);
  var rate = Number(document.getElementById("rate").value);
  var years = Number(document.getElementById("years").value);
  if (principal == 0){
      alert("Enter a positive number");
  }
  var interest = principal*years*rate/100;
  var year = new Date().getFullYear() + parseInt(years);
  document.getElementById("result").innerHTML = 
  "If you deposit "+principal+",\<br\>at an interest rate of "
  +rate+"%.\<br\>You will receive an amount of "+interest+
  ",\<br\>in the year "+year+"\<br\>"
}
function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}
