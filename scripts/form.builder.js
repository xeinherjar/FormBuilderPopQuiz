// Don't Touch The Below Code at All!
$("button").on("click",function($e){
  var specIndex = $($e.target).data('sample');
  var specData = samples[specIndex-1];
  $("#spec").html("Sample spec "+(specIndex)+" looks like: <br>"+JSON.stringify(specData));
  formBuilder(specData, $("#result"));
});