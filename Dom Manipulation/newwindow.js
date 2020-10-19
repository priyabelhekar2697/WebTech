// JavaScript source code


function openwind()
{
	mywin = window.open("", "Window", "width=300,height=300");
	var btn = document.getElementById("b1");
	btn.innerHTML = "Hide Window";
}

function writewind()
{
	mywin.document.write("<h2>Hello From new Window</h2>");
}

function swind()
{
	var h = prompt("Enter Height:");
	var w = prompt("Enter Width");
	mywin.resizeTo(w, h);
}

function mwind()
{
	var x = prompt("Enter X co-ordinate:");
	var y = prompt("Enter Y co-ordinate");
	mywin.moveBy(x, y);
}

function closewind()
{
	if (confirm("Do you really want to close..?"))
		mywin.close();
}