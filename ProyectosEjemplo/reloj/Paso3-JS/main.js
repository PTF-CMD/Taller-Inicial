$(function() {
	setInterval(function(){
		var dias_semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
		var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
		
		var date = new Date();

		var dia_mes = date.getDate();
		var dia_semana = dias_semana[date.getDay()];
		var mes = meses[date.getMonth()];
		var año = date.getFullYear();

		var hora = date.getHours();
		var minutos = date.getMinutes();
		var segundos = date.getSeconds(); 

		$('#dia_mes').html(dia_mes);
		$('#dia_semana').html(dia_semana);
		$('#mes').html(mes);
		$('#año').html(año);
		$('#hora').html(hora);
		$('#minutos').html(minutos);
		$('#segundos').html(segundos);

	},1000)
})