function KGCalc() {
  var p = isNaN($(".clspurchase").val()) ? 0 : $(".clspurchase").val();
  var w = isNaN($(".clsweight").val()) ? 0 : $(".clsweight").val();
  if (p == 0 || w == 0) {
    $("div.npresult")
      .text("Please enter valid Price / Weight!!!")
      .addClass("field-validation-error");
    alert("Please enter valid Price / Weight");
    return;
  }
  var r = p / (w / 1000);
  var kg = "Cost per Kilogram = " + r;
  $("div.npresult").text(kg).removeClass("field-validation-error");
}
function bmiCalc() {
  var height_in_cm = 200; //get value
  var weight_in_kg = 100; //get value
  var height_in_m = height_cm / 100; //forumala to convert meter to cm
  var bmi = weight / (height_in_m * height_in_m); //bmi calculation
  var category = "";
  if (bmi < 18.4) {
    category = "Under weight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    category = "Normal Height";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Over Weight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    category = "Moderately Obese";
  } else if (bmi >= 35 && bmi <= 39.9) {
    category = "Severely Obese";
  } else {
    category = "Very Severely Obese";
  }
}
function passwordgenerator(){
    var pass="";
    var alphaupper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphalower="abcdefghijklmnopqrstuvwxyz";
    var numeric="1234567890";
    var specialchar="~!@#$%^&*()<>,./?[]{} ";
    var salt = crypto.randomUUID();
    var passwordcombination= alphalower + alphaupper + numeric + specialchar + salt;
    for(i = 1; i <=16;i++){
        var char = Math.floor(Math.random()*passwordcombination.length + 1);
        pass += String.charAt(char);
    }
    return pass;
}
function ageCalc(){
    var dobinput = document.getElementById("DOB").val();
    var age = {};
    var dob = new Date(dobinput);
    var now = new Date(); //if possible user selected date as input
    //do validation for invalue dob
    var dobyear = dob.getFullYear();
    var dobmonth = dob.getMonth();
    var dobdate = dob.getDate();
    //do validation for invalue date, if it's based on user selected
    var currentyear = now.getFullYear();
    var currentmonth = now.getMonth();
    var currentdate = now.getDate();
    yearagecalc = currentyear - dobyear;
    if(currentmonth >= dobmonth){
        var monthage = currentmonth - dobmonth;
    }else{
        yearagecalc--;
        var monthagecalc = 12 + currentmonth - dobmonth;
    }
    if(currentdate>=dobdate){
        var dateagecalc = currentdate - dobdate;
    }else{
        monthagecalc--;
        var dateagecalc = 31 + currentdate - dobdate; //if month count is 30 or 28 or 29?
        if(monthage < 0){
            monthagecalc = 11;
            yearagecalc--;
        }
    }
    age = {
        years: yearagecalc,
        months: monthagecalc,
        days: dateagecalc
    };
    return age.years+"years "+age.months+"months "+age.days+"days"
}
function percentage(){
    var number = 20; //get value
    var percen = 20; //get value
    var result = (percen / 100 ) * number + "%";
    return result
}
function gstCalc(){
    var amount = 100; //get value
    var gstpercentage = 18;
    var result = ((gstpercentage / 100) * amount);
    var grossamount = result + amount;
    return "Net Amount "+amount+" GST amount "+result+" Gross Amount "+grossamount
}
function mortageCalc(){
    var principal = 100000; //get value
    var interest = 6; //get value
    var year = 30; //get value
    var monthlypayment_1 = principal * ((interest/100)/12) * (1+((interest/100)/12)^12(year))
    var monthlypayment_2 = (1+((interest/100)/12))^12(year)-1
    var monthlypayment = monthlypayment_1 / monthlypayment_2
    return "Monthly Payment "+monthlypayment
}
function interestCalc(){
    var principal = 1000; //getvalue
    var rateofinterest = 6; //getvalue
    var tenor = 3; //getvalue in years
    var interest = principal * (rateofinterest/100) * tenor;
    return "Interest amount is "+interest;
}
function compoundinterestCalc(){
    var principal = 1000; //getvalue
    var rateofinterest = 6; //getvalue
    var tenor = 3; //getvalue
    var compoundyear = 1; //getvalue
    var compoundinterest = principal * ((1+(rateofinterest/100)/compoundyear)^(tenor*compoundyear)-1)
    return "Compound interest is "+compoundinterest
}