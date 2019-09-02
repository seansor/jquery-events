//waits until page is loaded first
$(document).ready(function(){

    //applies colour red to paragraphs when clicked on 
    /*$("p").click(function(){
        $("p").addClass("highlight_text");
    });*/

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color")},function(){$("h2").removeClass( "h2_color");   
    });
    

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    /*$(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });*/
    
    $('.bottom_button').mouseenter(function(){
        $('.bottom_button').removeClass('makeRed').addClass('makeBorder');
    }).mouseleave(function(){
        $('.bottom_button').addClass('makeRed').removeClass('makeBorder');
    });
    
   /* $('.bottom_button').click(function(){
        $('.card_para').fadeToggle(500);
    })*/
    
    $('#stream1_btn').click(function() {
        if($('.stream1').css('background-color') == 'rgb(255, 255, 255)'){
            $('.card').css('background-color', 'rgb(255, 255, 255)');
            $('.stream1').css('background-color', 'rgb(255, 0, 0)');
        } else {
            $('.stream1').css('background-color', 'rgb(255, 0, 0)');
        }
    });
    
     $('#stream2_btn').click(function() {
        if($('.stream2').css('background-color') == 'rgb(255, 255, 255)'){
            $('.card').css('background-color', 'rgb(255, 255, 255)');
            $('.stream2').css('background-color', 'rgb(255, 0, 0)');
        } else {
            $('.stream2').css('background-color', 'rgb(255, 0, 0)');
        }
    });
    
    $('#stream3_btn').click(function() {
        if($('.stream3').css('background-color') == 'rgb(255, 255, 255)'){
            $('.card').css('background-color', 'rgb(255, 255, 255)');
            $('.stream3').css('background-color', 'rgb(255, 0, 0)');
        } else {
            $('.stream3').css('background-color', 'rgb(255, 0, 0)');
        }
    });
    
    $('p').click(function() {
        $(this).children('a').css('background-color', 'yellow');
    });
    
    $('.bottom_button').click(function(){
        $(this).prev('p').slideToggle('slow');
    });
    
    $('img').click(function() {
        $(this).next().children('p').slideDown('slow');
    });
    
    $('.card').click(function() {
        $(this).toggleClass('makePink');
    });
    
    $('#select').click(function() {
        $('.card:not(.makePink)').hide();
    });
    
    $('#all').click(function() {
        $('.card').show();
    });
    
})