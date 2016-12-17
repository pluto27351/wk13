$(document).ready(function(){

  $(".habrgr > span").click(function(){   /*漢堡選單*/
    if( $("nav").hasClass("click") ){
      $("nav").removeClass("click");
      $("nav ul").slideUp();
    }else{
      $("nav").addClass("click");
      $("nav ul").slideDown();
      return false;
    }
  });
  $("nav").mouseleave(function(){
    if( $(this).hasClass("click") ){
      $("nav ul").slideUp();
      $(this).removeClass("click");
    }

  });


});
