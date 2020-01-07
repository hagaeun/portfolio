// JavaScript Document
$(".main_menu>li").mouseover(function(){
	$(this).children(".sub_menu").addClass("open");
});

$(".sub_menu>li,.main_menu>li").mouseleave(function(){
	$(this).children(".sub_menu").removeClass("open");
});


$(".main_menu>li").mouseover(function(){
	$(".bar").addClass("see");
});

$(".sub_menu>li,.main_menu>li").mouseleave(function(){
	$(".bar").removeClass("see");
});

/*var imgs=2;
var now=0;
start();
function start(){
	$(".mv>img").eq(0).siblings().css("margin-top","-1000px");
	setInterval(function(){slide();},3000);}
function slide(){
	now=now==imgs?0:now+1;
	$(".mv>img").eq(now-1).css("margin-top","-1000px");
	$(".mv>img").eq(now).css("margin-top","0px");
	}*/
	
$(".button").click(function (){
	$("#menubar").addClass("active");
});
$(".btn>a").click(function (){
	$("#menubar").removeClass("active");
});
	
/*setInterval(slide,2000);
var now=0;
var imgs=1;
function slide(){
	now=now==imgs?0:now=now+1;
	$(".mv>img").eq(now).fadeIn();
	$(".mv>img").eq(now-1).fadeOut();
}*/