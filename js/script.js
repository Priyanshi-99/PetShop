

$(".eve").hover(function(){
	$(this).children("img").toggleClass("blur");
	
	$(this).children(".centered").toggleClass("hidden");
})