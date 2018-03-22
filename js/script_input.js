$(function(){
	var api = "http://sandipbgt.com/theastrologer/api/horoscope/{signo_ingles}/today/";

	$("#buscar").click(function(){
		var signo_ingles = $("#signo").val();
		var horoscopo = "";

		$.getJSON(api.replace("{signo_ingles}", signo_ingles), function(data){
			console.log(data);
			horoscopo = data.horoscope;
		}).always(function(){
			$("#horoscopo").text(horoscopo);
		});
	});
	
	$("#signo").keyup(function(event){
		console.log(event.keyCode);
		if (event.keyCode == 13) {
			$("#buscar").click();
		}
	}).focus();
});
