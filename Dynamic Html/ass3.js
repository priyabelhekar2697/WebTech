function Fact(num)
{
	var str="<table cellpadding=10 align=center border=1>";
	
	str+="<tr>";
	str+="<td>";
	str+="Number";
	str+="</td>";
	str+="<td>";
	str+="Power";
	str+="</td>";
	str+="</tr>";

	for(var i=1;i<=num;i++)
	{	
		
		var f=1;
		var j=i;
		while(i > 0)
		{
			f*=i;
			i--;
		}
		str+="<tr>"
		str+="<td>";
		str+=j;
		str+="</td>";
		str+="<td>";
		str+=f;
		str+="</td>";
		str+="</tr>"
	}
	str+="</table>";

	document.getElementById("fact").innerHTML=str;
}