var fadeTime=100,slideTime=4000;
var spocerImgSrc=[];
var spocerImgLink=[];
var periodicCounter=setInterval("slideSponcer()",slideTime);
$(document).ready(function(e) {
	$(document).on("mouseover","div#sponcerSlider ul li img",function(){
		$(this).fadeTo(300,0.2);		
		});
	$(document).on("mouseleave","div#sponcerSlider ul li img",function(){
		$(this).fadeTo(100,0.8);		
		});
	$("div#sponcerSlider img").each(function(index, element) {
        spocerImgSrc[index]=$(this).attr("src");
		spocerImgLink[index]=$(this).attr("alt");
    });
	$("div#sponcerSlider").html("<ul></ul>");
	$.each(spocerImgSrc,function(index){
				$("div#sponcerSlider ul").append('<a href="http://'+spocerImgLink[index]+'" target="_blank"><li><img class="filter" src="'+spocerImgSrc[index]+'" alt="http://'+spocerImgLink[index]+'" draggable="false" /></li></a>');
			});
	$("div#sponcerSlider ul li").each(function(index, element) {
        $(this).css("background-image","url("+$(this).children("img").attr("src")+")");
    });
   $("div#sponcerSlider").append('<div id="divMasker"></div>');
   $( "div#sponcerSlider ul li:first img").fadeTo(300,0);
});
function slideSponcer() {
	var transmittion=parseInt($("div#sponcerSlider ul li:first").css("width"))+10;
	transmittion*=-1;
	$( "div#sponcerSlider ul li:last img").fadeTo(0,1);
	$("div#sponcerSlider ul").enqt( { translate:{ x:transmittion+'px', y:'0px'} }, 400 ,function(){
			$( "div#sponcerSlider ul a:first" ).clone().appendTo( "div#sponcerSlider ul" );
			$( "div#sponcerSlider ul a:first" ).remove();
			$("div#sponcerSlider ul").enqt( { translate:{ x:'0px', y:'0px'} },0);
			$( "div#sponcerSlider ul li:first img").fadeTo(300,0);
		});
	
	
	
	
	}