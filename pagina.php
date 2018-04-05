<?php
	$nome = "Paulo";

	$signos = [
		[
			"nome" => "Sagitário",
			"data_inicio" => "22/11",
			"data_final" => "21/12",
			"signo_ingles" => "sagittarius"
		],
		[
			"nome" => "Libra",
			"data_inicio" => "23/09",
			"data_final" => "22/10",
			"signo_ingles" => "libra"
		],
		[
			"nome" => "Touro",
			"data_inicio" => "20/04",
			"data_final" => "21/05",
			"signo_ingles" => "taurus"
		]
	];
?>

<!doctype html>
<html lang="pt-BR">
	<head>
		<meta charset="ISO-8859-1">
		<title>Página PHP</title>
		<link rel="stylesheet" type="text/css" href="css/estilos.css">
		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/script_jquery.js"></script>

		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
 
		<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.js"></script>
	</head>

	<body>
		<table border="1" width="100%">
			<thead>
				<tr align="center">
					<td width="20%">
						Signo
					</td>
					<td width="20%">
						Data de Início
					</td>
					<td width="20%">
						Data Final
					</td>
					<td width="40%">
						Horóspoco
					</td>
				</tr>
			</thead>

			<tbody>
				<?php foreach ($signos as $signo): ?>
					<tr data-signo_ingles="<?= $signo["signo_ingles"] ?>">
						<td>
							<?= $signo["nome"] ?>
						</td>
						<td>
							<?= $signo["data_inicio"] ?>
						</td>
						<td>
							<?= $signo["data_final"] ?>
						</td>
						<td>
						</td>
					</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
	</body>
</html>
