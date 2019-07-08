$(window).scroll(function(evt){
  if ($(window).scrollTop()>350)
    $(".navbar").addClass("bg-dark");
  else
    $(".navbar").removeClass("bg-dark");
});


var s = skrollr.init();



$(document).ready(function(){
  $("btn.btn-primary").click(function(){
      alert("訂閱成功，敬啟期待!!");
  });
});