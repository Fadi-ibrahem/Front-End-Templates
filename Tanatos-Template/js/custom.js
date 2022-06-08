document.addEventListener('DOMContentLoaded', ()=>{

    //attaching niceScroll library
    $("body").niceScroll({
        cursorcolor: '#ff3921',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #ff3921'

    });

    //Header Height = window Height
    $('header').height($(window).height());

    //Moving to Features Section
    $('header .arrow i').click(function(){

        $('html, body').animate({
            scrollTop:$('.features').offset().top
        }, 1000);
    });

    $('.hire').click(function(){
        $('html, body').animate({
            scrollTop:$('.say-hello').offset().top
        }, 1000);
    });

    $('.ourWork').click(function(){
        $('html, body').animate({
            scrollTop:$('.our-work').offset().top
        }, 1000);
    });
    
    //Showing Images When Clicking On Show More Button
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(1000);
    });

    //testim Slider
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');

    function checkClient (){

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkClient();
    
    $('.testim i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(500, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn(500);
                checkClient();
            });
        
        } else {
            $('.testim .active').fadeOut(500, function() {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(500);
                checkClient();
            });
        }
    });

    //Enable Indicators for Our Team Slider
    var firstIndicator = $('.indicators .first'),
        secondIndicator = $('.indicators .second'),
        thirdIndicator = $('.indicators .third'),
        lastIndicator = $('.indicators .last');

    var firstMember = $('.our-team .team .member:first'),
        secondMember = firstMember.next('.member'),
        thirdMember = secondMember.next('.member'),
        lastMember = $('.our-team .team .member:last');

        
    //Adding Classes By Clicking Indicators
    $('.indicators li').click(function () {
        if($(this).hasClass('first')) {
            $(this).addClass('current').siblings().removeClass('current');
            firstMember.addClass('active').siblings().removeClass('active');

        } else if ($(this).hasClass('second')) {
            $(this).addClass('current').siblings().removeClass('current');
            secondMember.addClass('active').siblings().removeClass('active');
            
        } else if ($(this).hasClass('third')) {
            $(this).addClass('current').siblings().removeClass('current');
            thirdMember.addClass('active').siblings().removeClass('active');

        } else {
            $(this).addClass('current').siblings().removeClass('current');
            lastMember.addClass('active').siblings().removeClass('active');
        }
    });

    //Adding Classes By Hovering On Member Div
    $('.team .member').mouseover(function () {
        if($(this).hasClass('one')){
            $(this).addClass('active').siblings().removeClass('active');
            firstIndicator.addClass('current').siblings().removeClass('current');

        } else if ($(this).hasClass('two')){
            $(this).addClass('active').siblings().removeClass('active');
            secondIndicator.addClass('current').siblings().removeClass('current');

        } else if ($(this).hasClass('three')){
            $(this).addClass('active').siblings().removeClass('active');
            thirdIndicator.addClass('current').siblings().removeClass('current');

        } else {
            $(this).addClass('active').siblings().removeClass('active');
            lastIndicator.addClass('current').siblings().removeClass('current');
        }
    });

    //Remove Classes when Hover Out Member Divs
    $('.team .member').mouseout(function () {
        $(this).removeClass('active');
        $('.indicators li').removeClass('current');
    })










});