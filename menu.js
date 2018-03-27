$(document).ready(function(){

    $(".square").on("click", function(){

        if( $(this).hasClass(".isExpanded") == false){
            $(this).toggleClass("isExpanded");
            $(".items").toggleClass("expanded");
            
        }else {

            $(this).removeClass(".isExpanded");
            $(".items").removeClass("expanded");
        }
        

    });












});
