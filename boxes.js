// $('document').ready(function() {
// 	console.log("ready");
// 	$("#secretBox").css("background-color", "white");
// 	$("#secretBox").html("<h1>secret box!</h1>");
// 	$("#secretBox").css("color", "black");
// 	$("#row1").children().attr("class", "box");
// 	$("#row1").children().addClass("boxType3");
// 	$(".boxType1").css("background-color","white");
// 	$("#row2>:lt(2)").css("visibility","hidden");
// 	$(".box").not('#secretBox').css("width","2px");	
// });

$('document').ready(function() {
	$('#container').on('click', function(event) {
		console.log(event.pageX);
		console.log(event.pageY);
	});


$('.boxType1').wrap('<a href="http://www.galvanize.com"></a>').on('click', function(event) {
	event.preventDefault();     
	alert("You can't leave"); 
}); 

$('.box').on('click',function(event) {
	// console.log('hello');
	$(this).append('<img src="http://www.greatdanelady.com/Images/image0067.jpg">');
	$('img').css({'height': '95%','width': "95%"});
});

$('.box').on('click', 'img', function(event) {
	event.stopPropagation();
	$(this).remove();
});

$('#container').on('click', function(event) {
	var target = event.target;
	if(this.id === 'container') {
		$(this).css('background-color', '#32CD32');
	}
	if ($(target).hasClass('box')) {
		$(target).css('background-color', 'white');
		$(this).css('background-color', 'black');
	}
	
});




});	





