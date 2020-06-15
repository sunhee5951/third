$(document).ready(function(){
var  $rollingBox, $listBox, $listBox_ul, $listBox_ul_li

$rollingBox = $('#rollingBox');
$listBox = $rollingBox.find('.inner>.listBox');
$listBox_ul = $listBox.children('ul');
$listBox_ul_li = $listBox_ul.children('li');

$rollingBox = $('#rollingBox');
    $listBox = $rollingBox.find('.inner>.listBox');
    $listBox_ul = $listBox.children('ul');
    $listBox_ul_li = $listBox_ul.children('li');

    var wid = $listBox_ul_li.outerWidth();
	var num = $listBox_ul_li.length;
	var totalWid = wid*num;
	$listBox_ul.width(totalWid);
	var mleft = 0;
	
    var timer = setInterval(move,20);
    
    $listBox.on("mouseenter",function(){
        clearInterval(timer);
    });
    $listBox.on("mouseleave",function(){
        timer = setInterval(move,20);
    });

    function move(){
		mleft -=2;
		if(mleft < -wid){
			$(".list li").first().appendTo($listBox_ul);
			mleft = 0;
		}
		$listBox_ul.css({"left":mleft});
    }
    
    $(".rbtnPrev").on("click",function(e){
		e.preventDefault();
		$(".list li").last().prependTo(".list");
	});
	
	$(".rbtnNext").on("click",function(e){
		e.preventDefault();
		$(".list li").first().appendTo(".list");
	});

});