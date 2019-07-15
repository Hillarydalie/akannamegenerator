var century, year, month, date;

document.getElementById('inputform').onsubmit = function generateAkanName() { console.log(document.getElementById('inputform').value);

var dateOfBrith = document.getElementById('dateOfBrith').value;//get the year input from html form.

century = dateOfBrith.slice(0,2);//to pick the first two digits of the year input.
year = dateOfBrith.slice(2,4);//to pick the last two values of the year input.
month = document.getElementById('month').value;//get user input
date = document.getElementById('day').value;

var gender = document.querySelector('input[name = "gender"]:checked').value;//get value of the checked radio button.


var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

var DD = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Sunday"];

//This calculation returns a whole number representing the day of the week.
var dayOfBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10))) % 7;

//control flows to check whether the person is male or female.
if(gender === "Male"){
 var mName = maleName[dayOfBirth - 1]// -1 because index numbers begin from 0 and not 1
 var day = DD[dayOfBirth -1]
 alert(" You were born on a " + day + "." + " Your name is "+ mName);
   }
else if (gender === "Female") {
   var fName = femaleName[dayOfBirth - 1]
   var day = DD[dayOfBirth - 1]
   alert(" You were born on " + day + "." + " Your name is "+ fName);
   //mainForm.akanname.value = " You were born on " + day + "." + " Your name is "+ fName[];
   }
}