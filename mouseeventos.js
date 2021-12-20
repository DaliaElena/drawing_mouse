var color = "blue";

document.getElementById ("seleccionar_color");

var cuadrito = document.getElementById("area_de_dibujo_dos");
var papel = cuadrito.getContext("2d");
var estado;
var x = 100;
var y = 100;

cuadrito.addEventListener ("mousedown", pulsarMouse);
cuadrito.addEventListener ("mousemove", moverMouse);
cuadrito.addEventListener ("mouseup", levantarMouse);



// function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
// {
// 	lienzo.beginPath();
// 	lienzo.strokeStyle = color;
// 	lienzo.lineWidth = 3;
// 	lienzo.moveTo(xinicial,yinicial);
// 	lienzo.lineTo(xfinal, yfinal);
// 	lienzo.stroke();
// 	lienzo.closePath();
// }

function pulsarMouse(evento)

{

estado = 1;
x = evento.layerX;
y = evento.layerY;

}

function moverMouse(evento)
{
	if(estado == 1)
	{
		dibujarLinea(color, x, y, evento.layerX, evento.layerY);
	} 
	else{
		x = evento.layerX;
		y = evento.layerY;
	}
}

function levantarMouse(evento)
{
	estado=0;
}

function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal)
{
	papel.beginPath();
    papel.lineWidth = 3;
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
}

