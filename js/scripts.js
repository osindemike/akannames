function detailsValidation(formone){
  var details1= parseInt(formone.date.value, 10)
  if(details1<1 || details1>31){
    alert("Enter valid date of birth");
  }
  var details2= parseInt(formone.month.value, 10)
  if (details2<1 || details2>12){
    alert("Enter a valid month")
  }
}
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var namesMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];