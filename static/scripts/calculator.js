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
  var height_in_cm = parseInt($(".clsbmiheight").val());; //get value
  var weight_in_kg = parseInt($(".clsbmiweight").val());; //get value
  var height_in_m = height_in_cm / 100; //forumala to convert meter to cm
  var bmi = weight_in_kg / (height_in_m * height_in_m); //bmi calculation
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
  $("div.bmiresult").text(category);
}
function passwordgenerator(){
    var length = 16;
    var pass="";
    var alphaupper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphalower="abcdefghijklmnopqrstuvwxyz";
    var numeric="1234567890";
    var specialchar="~!@#$%^&*()<>,./?[]{}";
    var salt = crypto.randomUUID();
    var passwordcombination= alphalower + alphaupper + numeric + specialchar + salt;
    for(i = 0 , n = passwordcombination.length;i < length;i++){
         var char = passwordcombination.charAt(Math.floor(Math.random() * n));
          pass += char;
    }
    $("div.pwdresult").text( "Password :- " +pass ).toString();
     
}
function ageCalc(){
    var dobinput = $(".clsdob").val();
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

    var agcalcval = "Age = " + age.years+" years "+age.months+" months "+age.days+" days";
    $("div.ageresult").text(agcalcval);
}
function percentage(){
    var number = $(".clspvalue").val(); //get value
    var percen = $(".clspp").val(); //get value
    var result = (percen / 100 ) * number ;
    $("div.percentageresult").text(percen + " % of " + number + " is = " + result);
     
}
function gstCalc(){
    var amount = $(".clsgstamt").val(); //get value
    var gstpercentage = $(".clsgstpercent").val(); 
    var result = ((gstpercentage / 100) * amount);
    var grossamount = (parseInt(result) + parseInt(amount));
    var gstvalue = "Net Amount "+amount+" GST amount "+result+" Gross Amount "+grossamount
    $("div.gstresult").text(gstvalue);
}
function mortageCalc(){
    var pamt = parseInt($(".clsemiprincipal").val());//get value
    var rate = parseInt($(".clsemipercent").val()); //get value
    var year = parseInt($(".clsemiyear").val()); //get value
   // alert(principal);
    //var monthlypayment_1 = principal * ((interest/100)/12) * (1+((interest/100)/12)^12(year));
    //var months = (year * 12);
    //var monthlypayment_1 =   (principal * (interest * 0.01)) / months;
    //var monthlypayment_1 =   principal * interest * (((1 + interest) ^ months) / ((( 1 + interest ) ^ months) - 1) )


  var month = year * 12;
  
  
   var monthlyInterestRatio = (rate/100)/12;
   var monthlyInterest = (monthlyInterestRatio*pamt);
      var top = Math.pow((1+monthlyInterestRatio),month);
         var bottom = top -1;
         var sp = top / bottom;
         var emi = ((pamt * monthlyInterestRatio) * sp);
   var result = emi.toFixed(2);
   var totalAmount = emi*month;
   var yearlyInteret = (totalAmount-pamt).toFixed(2);
   //var downPayment = pamt*(20/100);
   var emivalue = "Monthly Payment = "+ result + " , Total Intrest = " + yearlyInteret ;
   $("div.emiresult").text(emivalue);
}
function interestCalc(){
    var principal = 1000; //getvalue
    var rateofinterest = 6; //getvalue
    var tenor = 3; //getvalue in years
    var interest = principal * (rateofinterest/100) * tenor;
    return "Interest amount is "+interest;
}
function compoundinterestCalc(){
    var p = parseInt($(".clsciprincipal").val()); //getvalue
    var r = parseInt($(".clscipercentage").val()); //getvalue
    var t = parseInt($(".clsciyears").val()); //getvalue
    
    //var compoundinterest = principal * ((1+(rateofinterest/100)/compoundyear)^(tenor*compoundyear)-1)
    var CI = p * (Math.pow((1 + r / 100), t));

    $("div.ciresult").text("Compound interest is "+ CI.toFixed(2));
}