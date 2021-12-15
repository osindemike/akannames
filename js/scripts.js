

function getAkanname(){
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var genderUser = document.getElementsByName("gender");
var year= document.getElementById("year").value;
var gender = document.querySelector('input[name="Gender"]:checked').value;
var month= document.getElementById("month").value;
var date= document.getElementById("date").value;
var MM = parseInt(document.getElementById("month").value);
var DD = parseInt(document.getElementById("date").value);
var CC = parseInt(year.slice(0,2));
var YY = parseInt(year.slice(2,4));
var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
d=d.toFixed(0);

if (gender== ""){
  alert("kindly select your gender");
}
else if (d ==1 && gender == "Male"){
  alert("Your akan name is " +namesMale[0]);
}
else if (d ==2 && gender == "Male"){
  alert("Your akan name is " +namesMale[1]);
}
else if (d ==3 && gender == "Male"){
  alert("Your akan name is " +namesMale[2]);
}
else if (d ==4 && gender == "Male"){
  alert("Your akan name is " +namesMale[3]);
}
else if (d ==5 && gender == "Male"){
  alert("Your akan name is " +namesMale[4]);
}
else if (d ==6 && gender == "Male"){
  alert("Your akan name is " +namesMale[5]);
}
else if (d ==7 && gender == "Male"){
  alert("Your akan name is "+namesMale[6]);
}
else if (d ==1 && gender == "Female"){
  alert("Your akan name is " +namesFemale[0]);
}
else if (d ==2 && gender == "Female"){
  alert("Your akan name is " +namesFemale[1]);
}
else if (d ==3 && gender == "Female"){
  alert("Your akan name is " +namesMale[2]);
}
else if (d ==4 && gender == "Female"){
  alert("Your akan name is " +namesMale[3]);
}
else if (d ==5 && gender == "Female"){
  alert("Your akan name is " +namesFemale[4]);
}
else if (d ==6 && gender == "Female"){
  alert("Your akan name is " +namesFemale[5]);
}
else if (d ==7 && gender == "Female"){
  alert("Your akan name is" +namesFemale[6]);
}
}
function validateEmpty(){
  var genderUser = document.getElementsByName("gender");
  if(document.formone.date.value == "" || document.formone.date.value >31 || document.formone.date.value <=0){
    alert("Enter valid date of birth");
    }
  else if(document.formone.month.value == "" || document.formone.month.value >12 || document.formone.month.value <=0){
      alert("Enter valid month of birth");
    }
  else if(document.formone.year.value == "" || document.formone.year.value >2100 || document.formone.year.value <=1900){
      alert("Enter valid year of birth");
    }
  else if (genderUser[0].checked == false && genderUser[1].checked ==false){
      alert ("Kindly select your gender");
    }
}

  