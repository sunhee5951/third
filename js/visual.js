$(document).ready(function(){
    /*------------------------전역변수 부---------------------- */
    var $txtBox, $txtBox_ul, $txtBox_ul_li, $sliderBox, $sliderBox_ul, $sliderBox_ul_li, $floatBox, $floatBox_ul, $floatBox_ul_li, 
    $btnNext,
    
    $txtBox = $('.txtBox');
    $txtBox_ul = $txtBox.children('ul');
    $txtBox_ul_li = $txtBox_ul.children('li');

    $line = $('ul.line');
    $line_ul_li = $line.children('li');

    $sliderBox = $('.sliderBox');
    $sliderBox_ul = $sliderBox.children('ul');
    $sliderBox_ul_li = $sliderBox_ul.children('li');

    $floatBox = $('.floatBox');
    $floatBox_ul = $floatBox.children('ul');
    $floatBox_ul_li = $floatBox_ul.children('li');

    $visual = $('#visual');
    $btnNext = $visual.find('.btnNext>li');

/*------------------------이벤트 바인딩---------------------- */
    $btnNext.on('click' ,function(){
		var i = $(this).index();
        activation(i);
    });

    sliding({
        type: 'text',
        selector: '.txt1',
        speed: 700,
        delay: 0
    }); 
    sliding({
        type: 'text',
        selector: '.txt2',
        speed: 700,
        delay: 700
    }); 
    sliding({
        type: 'text',
        selector: '.txt3',
        speed: 700,
        delay: 1000
    }); 
    
    /*------------------------함수 정의 부---------------------- */
    function activation(i){
        $txtBox_ul_li.removeClass('on');
        $txtBox_ul_li.eq(i).addClass('on');
        
        $line_ul_li.removeClass('on');
        $line_ul_li.eq(i).addClass('on');

        $sliderBox_ul_li.removeClass('on');
        $sliderBox_ul_li.eq(i).addClass('on');
        
        $floatBox_ul_li.removeClass('on');
		$floatBox_ul_li.eq(i).addClass('on');

		$btnNext.removeClass('on');
		$btnNext.eq(i).addClass('on');
    }
    function sliding(options){   

        var defaults = {
            type: 'text',
            selector: '.txt',
            speed: 600,
            delay:0 
        }
        var options = $.extend({},defaults,options);
        
        if(options.type=='text'){
            var bgColor = $(options.selector).children('span').css('color');
        }else{
            var bgColor = $(options.selector).attr('data-color');
        }
    
        $(options.selector).append(
            $('<div class="mask">').css({
                width:'100%', height:'100%', backgroundColor:bgColor, 
                position:'absolute', top:0, left:'-100%'
            })
        );
        
        $(options.selector).find('.mask').stop().delay(options.delay).animate({left:'0%'},options.speed,'easeInExpo',function(){
            $(this).prev().css({opacity:1});
            $(this).stop().animate({left:'100%'},options.speed, 'easeInExpo',function(){
                $(this).remove();
            })
        })
        
    }
})