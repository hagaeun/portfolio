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

$(".button").click(function (){
	$("#menubar").addClass("active");
});
$(".btn>a").click(function (){
	$("#menubar").removeClass("active");
});