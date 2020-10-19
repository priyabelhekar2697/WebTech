// JavaScript source code
function PrimeCheck(num)
{
	var flag=0;
	if(num==0 && num==1)
	{
		flag=0;
	}
	else
	{
		for(var i=2;i<=(num/2);i++)
		{
			if((num%i)==0)
			{
				flag=1;
				break;
			}
		}
	}

	if(flag==0)
	{
		document.getElementById("primecheck").innerHTML="Prime number ";
	}
	else
	{
		document.getElementById("primecheck").innerHTML="Not a Prime number ";
	}
}