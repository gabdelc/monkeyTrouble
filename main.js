function mono1()
{
	var img = document.getElementById("img_mono_1");
	var checkA = document.getElementById("mono_1");

	if(checkA.checked)
	{
		img.innerHTML = '<img class="imagen" src="img/happy.jpg">';
	}else{
		img.innerHTML = '<img src="img/sad.jpg">';
	}
}

function mono2()
{
	var img2 = document.getElementById("img_mono_2");
	var checkB = document.getElementById("mono_2");

	if(checkB.checked)
		img2.innerHTML = '<img src="img/happy.jpg">';
	else
		img2.innerHTML = '<img src="img/sad.jpg">';
}

function evaluar()
{
	var aSmile = document.getElementById("mono_1").checked;
	var bSmile = document.getElementById("mono_2").checked;
	var salida = document.getElementById("salida");

	if(aSmile == bSmile)
	{
		salida.innerHTML = "1";
	}else{
		
		salida.innerHTML = "0";
	}
}