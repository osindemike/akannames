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
var genderUser;
CC = parseInt(year.slice(0,2));
YY = parseInt(year.slice(2,4));
MM = parseInt(month);
DD = parseInt(year);
function getDate(){
var d = parseFloat(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
  console.log(d);
}
function selectGender(){
  var genderUser = document.getElementsByName("gender");
  if (genderUser[0].checked == true){
    var gender = "Male";
  }
  else if(genderUser[1].checked == true){
    var gender = "Female";
  }
}
if (gender ==''){
  alert("select a required gender");
}
else if (d ==1 && gender == "Male"){
  alert("Your akan name is " +namesMale[0]+ "as you were born on a " +days[0]+".")
}
else if (d ==2 && gender == "Male"){
  alert("Your akan name is " +namesMale[1]+ "as you were born on a " +days[1]+".")
}
else if (d ==3 && gender == "Male"){
  alert("Your akan name is " +namesMale[2]+ "as you were born on a " +days[2]+".")
}
else if (d ==4 && gender == "Male"){
  alert("Your akan name is " +namesMale[3]+ "as you were born on a " +days[3]+".")
}
else if (d ==5 && gender == "Male"){
  alert("Your akan name is " +namesMale[4]+ "as you were born on a " +days[4]+".")
}
else if (d ==6 && gender == "Male"){
  alert("Your akan name is " +namesMale[5]+ "as you were born on a " +days[5]+".")
}
else if (d ==7 && gender == "Male"){
  alert("Your akan name is " +namesMale[6]+ "as you were born on a " +days[6]+".")
}
else if (d ==1 && gender == "Female"){
  alert("Your akan name is " +namesFemale[0]+ "as you were born on a " +days[0]+".")
}
else if (d ==2 && gender == "Female"){
  alert("Your akan name is " +namesFemale[1]+ "as you were born on a " +days[1]+".")
}
else if (d ==3 && gender == "Female"){
  alert("Your akan name is " +namesMale[2]+ "as you were born on a " +days[2]+".")
}
else if (d ==4 && gender == "Female"){
  alert("Your akan name is " +namesMale[3]+ "as you were born on a " +days[3]+".")
}
else if (d ==5 && gender == "Female"){
  alert("Your akan name is " +namesFemale[4]+ "as you were born on a " +days[4]+".")
}
else if (d ==6 && gender == "Female"){
  alert("Your akan name is " +namesFemale[5]+ "as you were born on a " +days[5]+".")
}
else if (d ==7 && gender == "Female"){
  alert("Your akan name is " +namesFemale[6]+ "as you were born on a " +days[6]+".")
}
}
