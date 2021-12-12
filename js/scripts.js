function detailsValidation(formone){
  var details1= parseInt(formone.date.value, 10)
  if(details1<0 || details1>31){
    alert("Enter valid date of birth");
  }
  var details2= parseInt(formone.month.value, 10)
  if (details2<0 || details2>12){
    alert("Enter a valid month")
  }
}
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC;
var YY;
var MM;
var DD;
var d; 
var year= document.getElementById("year").value;
var month= document.getElementById("month").value;
var date= document.getElementById("date").value;
CC = parseInt(year.slice(0,2));
YY = parseInt(year.slice(2,4));
MM = parseInt(month);
DD = parseInt(year);
function getDate(){
  d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
  console.log(d);
}