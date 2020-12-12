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
        $('.moodRevealHypomania').css('width', '-=25%');
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
        $('.status-icon').show();
        $('.img').show();
    })
    $('#weedbtn').click(function(){
        $('.moodRevealDepression').css('width', '0%');
        $('.moodRevealHypomania').css('width', '+=25%');
        $('.status-icon').show();
        $('.img').show();
    })
    $('.status-icon').click(function(){
        if  ($('.moodRevealDepression').css('width') >= '50%') {
            $('#weedbtn').show();
            $('#foodbtn').hide();
            $('#foodimg').hide();
            $('#exercisebtn').hide();
            $('#exerciseimg').hide();
            $('#workbtn').hide();
            $('#workimg').hide();

        } else {
            $('#weedbtn').hide();
            $('#foodbtn').show();
            $('#foodimg').show();
            $('#exercisebtn').show();
            $('#exerciseimg').show();
            $('#workbtn').show();
            $('#workimg').show();
        }
        if ($('.moodRevealHypomania').css('width') >= '50%'){
            $('#sleepbtn').hide();
            $('#sleepimg').hide();
            $('#foodbtn').hide();
            $('#foodimg').hide();
            $('#weedbtn').hide();
            
        }
        if ($('.moodRevealHypomania').css('width') >= '75%') {
            $('#addictionbtn').hide();
            $('#addictionimg').hide();
        }
        if ($('.moodRevealHypomania').css('width') >= '50%') {
            $('#workbtn').hide();
            $('#workimg').hide();
        }
        if ($('.moodRevealHypomania').css('width') == '100%') {
            $('#exercisebtn').hide();
            $('#exerciseimg').hide();
            $('.moodRevealDepression').css('width','+=25%');
        }
    })
})
