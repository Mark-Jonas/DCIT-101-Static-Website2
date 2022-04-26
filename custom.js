// menu sticky
$(window).bind("scroll", function(){
   var gap = 50;
   if($(window).scrollTop() > gap){
        $("nav").addClass("active");
   } else{
        $("nav").removeClass("active");
   }
});

// Toggle Menu
$(".toggle").on("click", function(){
    if($(".menu").hasClass("active")){
        $(".menu").removeClass("active");
        $(this).find(".toggle-icon").html(<ion-icon name="menu-outline"></ion-icon>);
    } else{
        $(".menu").addClass("active")
        $(this).find(".toggle-icon").html(<ion-icon name="close-outline"></ion-icon>);
    }
});