function generateAkan() {

  //This is an array of the female names
  var femaleAkanName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  //This is an array of the male names
  var maleAkanName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

  //This is an array of the day of the week, this informs the names respectively
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];

  //This will grab the input placed in the date section
  var birthdayInput = document.getElementById("dateinputform").value;

  //This will contain gender information from the gender radio buttons
  var gender ;

  //This statement confirms the radio button confirmation if checked
  if (document.getElementById('genderFemaleSelected').checked) {
    //This will check if female radio is checked
   gender = document.getElementById('genderFemaleSelected').value;
   }
   else if(document.getElementById('genderMaleSelected').checked){
     //This will check if male radio is checked
     gender = document.getElementById('genderMaleSelected').value;

   }

  // Will slice dateinput to get century details
  var century = parseInt(birthdayInput.slice(0,2));

  //Will slice dateinput to get year details
  var year = parseInt(birthdayInput.slice(2,4));

  //Will slice dateinput to get month details
  var month = parseInt(birthdayInput.slice(5,7));

  //Will slice dateinput to get day details
  var day = parseInt(birthdayInput.slice(8,10));



  //This formula will calculate the excact day of the week of birth
  var dayOfBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;

  //Will check if gender selected is male
  if (gender ==="M"){
    
    //Will find out value of gender by index [dayOfBirth-1]
    var mAkanName =  maleAkanName[dayOfBirth -1];

    //Will print the alert of the Akan name if male
    alert("Your Akhan Name is "+ mAkanName);

    //This should publish the Akan name in our paragraph id *not working yet*
    document.getElementById("displayName").innerHTML =  "Your Akhan Name is "+ mAkanName;

  } 
  //Will check if gender selected is female
   else {

    //Will find out value of gender by index [dayOfBirth-1]
    var fAkanName = femaleAkanName[dayOfBirth -1];

    //Will print the alert of the Akan name if female
    alert("Your Akhan Name is "+ fAkanName);

    //This should publish the Akan name in our paragraph id *not working yet*
    document.getElementById("displayName").innerHTML = "Your Akhan Name is "+ fAkanName;//write value in html element p
  }

}