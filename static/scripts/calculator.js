
function KGCalc() {
    var p = (isNaN($(".clspurchase").val())) ? 0 : $(".clspurchase").val(); 
    var w = (isNaN($(".clsweight").val())) ? 0 : $(".clsweight").val();
    if ( p == 0 || w == 0)  
    {
        $('div.npresult').text("Please enter valid Price / Weight!!!").addClass("field-validation-error"); 
        alert("Please enter valid Price / Weight");
        return;
    }
    var r = (p / w) * 1000;
    var kg = "Cost per Kilogram = " + r;
    $('div.npresult').text(kg).removeClass("field-validation-error"); 
  }