// JavaScript source code


function openwind()
{
	mywin = window.open("", "Client Window", " width=600, height=400 , screenY=200, screenX=200");
}

function bname()
{
	mywin.document.write("<h1>" + navigator.appName + "</h1><br/><br/>");
}

function ver()
{
	mywin.document.write("<h1>" + navigator.appVersion + "</h1><br/><br/>");
}

function cookiesstat()
{
	mywin.document.write("<h1>Cookies Enabled : " + navigator.cookieEnabled + "</h1>");
}