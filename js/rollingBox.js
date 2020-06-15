$(document).ready(function(){
/*------------------------전역변수 부---------------------- */
var  $rollingBox, $listBox, $listBox_ul, $listBox_ul_li

$rollingBox = $('#rollingBox');
$listBox = $rollingBox.find('.inner>.listBox');
$listBox_ul = $listBox.children('ul');
$listBox_ul_li = $listBox_ul.children('li');

$rollingBox = $('#rollingBox');
$listBox = $rollingBox.find('.listBox');
$listBox_ul = $listBox.children('ul');
$listBox_ul_li = $listBox_ul.children('li');
$rbtnPrev = $rollingBox.find(".rbtnPrev");
$rbtnNext = $rollingBox.find(".rbtnNext");

var wid = $listBox_ul_li.outerWidth();
var num = $listBox_ul_li.length;
var totalWid = wid*num;
$listBox_ul.width(totalWid);
var mleft = 0;

var timer = setInterval(move,20);

/*------------------------이벤트 바인딩---------------------- */
$listBox.on("mouseenter",function(){
	clearInterval(timer);
});
$listBox.on("mouseleave",function(){
	timer = setInterval(move,20);
});

$rbtnPrev.on("click",function(e){
	e.preventDefault();
	$listBox_ul_li.last().prependTo($listBox_ul);
});

$rbtnNext.on("click",function(e){
	e.preventDefault();
	$listBox_ul_li.first().appendTo($listBox_ul);
});

/*------------------------함수 정의 부---------------------- */
function move(){
	mleft -=2;
	if(mleft < -wid){
		$(".list li").first().appendTo($listBox_ul);
		mleft = 0;
	}
	$listBox_ul.css({"left":mleft});
}



});