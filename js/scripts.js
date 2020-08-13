$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const moneyVal = $("input:radio[name=money]:checked").val();
    const libertyVal = $("input:radio[name=liberty]:checked").val();
    const total = moneyVal + libertyVal;
    
    let orientation;

    if (total <= 2) {
      orientation = "liberal";
    } else if (total >= 6) {
      orientation = "conservative";
    } else {
      orientation = "moderate";
    }

    $("#party").text(orientation);
    $("#orientation").show();

    event.preventDefault();
  });
});




