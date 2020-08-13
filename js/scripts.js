function orients(total) {
  
  let orient;

  if (total <= 2) {
    orient = "liberal";
  } else if (total >= 6) {
    orient = "conservative";
  } else {
    orient = "moderate";
  }
  return orient;
}

$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const moneyVal = parseInt($("input:radio[name=money]:checked").val());
    const libertyVal = parseInt($("input:radio[name=liberty]:checked").val());
    const total = moneyVal + libertyVal;

    let orientation = orients(total);
    
    $("#party").text(orientation);
    $("#orientation").show();

    event.preventDefault();
  });
});






