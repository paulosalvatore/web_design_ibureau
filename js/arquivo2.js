$(function(){
	$("#buscar").click(function(){
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var idade = $("#idade").val();
		
		if (nome == "" || sobrenome == "" || idade == "")
		{
			$("#resultado").text("Digite as informações corretamente.");
		}
		else
		{
			$("#resultado").text("Olá " + nome + " " + sobrenome + ", você possui " + idade + " anos.");
		}
	});
});