$(document).ready(function(){
    /*------------------------전역변수 부---------------------- */
    var $txtBox, $txtBox_ul, $txtBox_ul_li, $sliderBox, $sliderBox_ul, $sliderBox_ul_li, $floatBox, $floatBox_ul, $floatBox_ul_li, 
    $btnNext, speed, isAnimated,
    
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
    
    /*------------------------함수 정의 부---------------------- */
    function activation(){
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
})