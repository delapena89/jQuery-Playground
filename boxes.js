$('document').ready(function() {
	console.log("ready");
	$("#secretBox").css("background-color", "white");
	$("#secretBox").html("<h1>secret box!</h1>");
	$("#secretBox").css("color", "black");
	$("#row1").children().attr("class", "box");
	$("#row1").children().addClass("boxType3");
	$(".boxType1").css("background-color","white");
	$("#row2>:lt(2)").css("visibility","hidden");
	$(".box").css("width", "2px"); {
	$("#secretBox").css("width","154px");	
	}
});	





