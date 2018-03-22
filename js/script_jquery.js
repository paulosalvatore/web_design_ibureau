$(function(){
	//$("table").DataTable();

	// var elementos = $(".principal");
	// elementos.text("Novo texto");

	/*
	elementos.animate({
		"margin-left": "100px"
	}, 3000);
	*/

	/*
	elementos.each(function(){
		var texto = $(this).text();
		console.log(texto);
	});

	var nomes = [
		"Paulo",
		"Juvenal",
		"Hulisses",
		"Gerônimo",
		"Maicon"
	];

	$.each(nomes, function(index, value){
		console.log(index, value);
	});

	var pessoa = {
		"nome": "Paulo Salvatore",
		"idade": 24,
		"signo": "Sagitário",
		"signo_ingles": "sagittarius"
	};
	*/

	var api = "http://sandipbgt.com/theastrologer/api/horoscope/{signo_ingles}/today/";

	$("table tbody tr").each(function(){
		var signo_ingles = $(this).data("signo_ingles");
		var tr = $(this);
		var horoscopo = "";

		$.getJSON(api.replace("{signo_ingles}", signo_ingles), function(data){
			console.log(data);
			horoscopo = data.horoscope;
		}).always(function(){
			tr.find("td").eq(3).text(horoscopo);
		});
	});
});
