// JavaScript source code
function DigitSum(num)
{
	var res=0,rem;

	while(num > 0)
	{
		rem=num%10;
		num=Math.trunc(num/10);
		res=res+rem;
	}

	document.getElementById("digitsum").innerHTML="Sum of digits : "+res;
}