$(()=>{
    $('.startbtn').click(function(){
        $('.title').remove();
        $('.startbtn').remove();
        $('.rulesbtn').remove();
        $('.game').fadeIn(2000);
        $('.main').fadeTo("slower", 1);
        $('.rules').hide();
        $('.status-icon').hide();
        $('.prompt').hide();
    })
    $('.rulesbtn').click(function(){
        $('.title').remove();
        $('.rulesbtn').remove();
        $('#mainbtn').remove();
        $('.rules').fadeIn(2000);
        $('.main').fadeTo("slower", .8);
        $(".main").css("background-image", "linear-gradient(to left top, rgba(27, 153, 139, 1), rgba(255, 253, 130, 1)");
    })
    $('.advancebtn').click(function(){
        $('#greeting').remove();
        $('.advancebtn').remove();
        $('.status-icon').show();
        $('#weedbtn').hide();
        $('#scenario1').show();
    })
    
    $('#sleepbtn').click(function(){
        $('.moodRevealDepression').css('width', '-=25%');
    })
    $('#foodbtn').click(function(){
        $('.moodRevealDepression').css('width', '+=25%');
        $('.moodRevealHypomania').css('width', '-=25%');
    })
    $('#addictionbtn').click(function(){
        $('.moodRevealHypomania').css('width', '+=25%');
        $('.moodRevealDepression').css('width', '-=25%');
    })
    $('#workbtn').click(function(){
        $('.moodRevealDepression').css('width', '+=25%');
        $('.moodRevealHypomania').css('width', '-=25%');
    })    
    $('#exercisebtn').click(function(){
        $('.moodRevealDepression').css('width', '-=25%');
    })
    $('#therapybtn').click(function(){
        $('.moodRevealDepression').css('width', '0%');
        $('.moodRevealHypomania').css('width', '0%');
    })
    $('#weedbtn').click(function(){
        $('.moodRevealDepression').css('width', '0%');
        $('.moodRevealHypomania').css('width', '+=25%');
    })

    if  (   $('.moodRevealDepression').css('width') == '0%') {
        $('weedbtn').after('#therapybtn');
    } 
    // if player doesn't #sleepbtn || #foodbtn after looping through 5x, hypomania +=25%
// if moodRevealHypomania = 100%, set width to 0% and set moodRevealDepression = 50%



})
