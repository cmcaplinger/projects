class Player {
    constructor (mood, sleep, food, addiction, work){
        this.mood = mood,
        this.sleep = sleep,
        this.food = food,
        this.addiction = addiction,
        this.work = work,
        this.money = money
    }
    eat() {}
    sleep() {}
    indulge() {}
    work() {}
    therapy() {}
}

$(()=>{
    $('.startbtn').click(function(){
        $('.title').remove();
        $('.startbtn').remove();
        $('.rulesbtn').remove();
        $('.game').fadeIn(2000);
        $('.main').fadeTo("slower", 1);
        $('.rules').hide();
        $('.status-icon').hide();

    })
    $('.rulesbtn').click(function(){
        $('.title').remove();
        $('.rulesbtn').remove();
        $('#mainbtn').remove();
        $('.rules').fadeIn(2000);
        $('.main').fadeTo("slower", .8);
        $(".main").css("background-image", "linear-gradient(to left top, rgba(27, 153, 139, 1), rgba(255, 253, 130, 1)");
    })
})