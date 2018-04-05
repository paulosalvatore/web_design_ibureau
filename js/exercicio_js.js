/*
// Exercício 1
var numerica = 1;
var decimal = 1.1;
var texto = "Texto";
var booleano = true;

console.log(numerica);
console.log(typeof(numerica));

console.log(decimal);
console.log(typeof(decimal));

console.log(texto);
console.log(typeof(texto));

console.log(booleano);
console.log(typeof(booleano));
*/

/*
// Exercício 2
var nome = "Paulo";
var sobrenome = "Salvatore";

console.log(nome + " " + sobrenome);
*/

/*
// Exercício 3
var refeicao = 42.54;
var taxa = 10;
var taxa_real = taxa / 100;

var total = refeicao + (refeicao * taxa);
console.log(total);
*/

var signos = {
	"libra": "Descrição de Libra",
	"sagitário": "Descrição de Sagitário"
}

$(function(){
	$("#buscar").click(function(){
		var signo = $("#signo").val();
		
		if (signos[signo] == undefined) {
			console.log("Esse signo não existe");
			$("#exibir_signo").text("Esse signo não existe.");
		}
		else {
			console.log(signos[signo]);
			$("#exibir_signo").text(signos[signo]);
		}
		
		if (signo == "sagitário")
		{
			$("#cachorrineo").show();
		}
		else
		{
			$("#cachorrineo").hide();
		}
		
		/*
		if (signo == "libra") {
			console.log("Descrição de Libra");
		}
		else if (signo == "sagitário") {
			console.log("Descrição de Sagitário");
		}
		else {
			console.log("Signo inválido");
		}
		*/
	});
});