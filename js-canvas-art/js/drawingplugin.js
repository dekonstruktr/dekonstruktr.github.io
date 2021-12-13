// custom functions
function line(x1, y1, x2, y2, width, color){
	var d = document.getElementById("canvas").getContext("2d");
	d.beginPath
	d.moveTo(x1, y1);
	d.lineTo(x2, y2);
	d.lineWidth = width;
	d.strokeStyle = color;
	d.stroke();
};

function rect(x, y, w, h, color){
	var d = document.getElementById("canvas").getContext("2d");
	
	d.fillStyle = color;
	d.fillRect(x, y, w, h);

	
};

function sRect(x, y, w, h, color){
	var d = document.getElementById("canvas").getContext("2d");
	
	d.strokeStyle = color;
	d.strokeRect(x, y, w, h);

	
};

function triangle(x1,y1,x2,y2,x3,y3, color){
	
	var d = document.getElementById("canvas").getContext("2d");
	d.beginPath();
	d.moveTo(x1,y1);
	d.lineTo(x2,y2);
	d.lineTo(x3,y3);
	d.closePath();
	d.fillStyle = color;
	d.fill();
}


function circle(x, y, radius, color){
	var d = document.getElementById("canvas").getContext("2d");
	d.fillStyle = color;
	d.beginPath();
	d.arc(x,y,radius,0,2*Math.PI,false);
d.fill();
};