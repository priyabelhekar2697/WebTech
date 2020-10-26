exports.isPrime=function(no)
{
	var flag=0;
	for(var i=2;i<no/2;i++)
	{
		if(no%i == 0)
		{
			console.log("Given number is Not prime");
			flag=1;
			break;
		}
	}
	if(flag == 0)
		return console.log("Given number id Prime");
}

exports.CalFact=function(num)
{
	
	fact=1;
	while(num>0)
	{
		fact=fact*num;
		num--;
	}
	return fact;
}

exports.isPerfect=function(num)
{
	var div,result=0;
	for(var i=1;i<num;i++)
	{
		div=num%i;
		if(div == 0)
		{
			result=result+i;
		}
	}
	if(num==result)
	{
		return console.log(num+" is Perfect number ");
	}
	else
	{
		return console.log(num+" is Not a Perfect number ");
	}
}













