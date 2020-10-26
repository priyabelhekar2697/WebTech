
function ValidateData()
{
	
	var patt1=/[A-Z][a-z]/;
	flag=false;

	var fnm=document.f1.first.value;
	if(fnm.length == 0)
	{
		alert("All field should be selected....");
		document.f1.first.value="";
       
        return;
	}
	var lnm=document.f1.lastname.value;
	  
	  if(patt1.test(fnm) == flag)
	  {
			alert("First name should only contain alphabates....");
			document.f1.first.value="";
       
        return;
	  }
	  if(patt1.test(lnm) == flag)
	  {
			alert("Last name should only contain alphabates....");
			document.f1.lastname.value="";
       
        return;
	  }
	  var ac=document.f1.act.value;
	  var patt2=/[0-9]{10}$/;

	  if(patt2.test(ac) == flag)
	  {
			alert("Account number should be of 10 digit and numberic only....");
			document.f1.act.value="";
       
        return;

	  }

	  var pas=document.f1.pass.value;
	  var pas1=document.f1.pass1.value;

	  var patt3=/^(?=.*[0-9])(?=.*[~!@#$%^&&*()]).{5,12}$/;
	  if(patt3.test(pas) == flag)
	  {
			
			 alert("Enter Valid password....");
			 document.f1.pass.value="";
				return;
        
	  }

	  var patt4=/[A-B][a-b]$/;
	  if(patt4.test(pass) ==flag )
	  {
		document.getElementById("fail").innerHTML="Password Weak";
       	document.eval.fname.value="";
	    return;

	  }
	   var patt5=/[A-B][a-b][0-9][1,]|(?=.*[~!@#$%^&&*()]){1,}$/;
	    if(patt5.test(pass) ==flag )
	  {
		document.getElementById("fail").innerHTML="Password Average";
       	document.eval.fname.value="";
	    return;

	  }
	   var patt6=/[A-B][a-b][0-9][1,](?=.*[~!@#$%^&&*()]){1,}$/;
	    if(patt6.test(pass) ==flag )
	  {
		document.getElementById("fail").innerHTML="Strong Password";
       	document.eval.fname.value="";
	    return;

	  }
	  if(pas != pass1)
	  {
	  	  alert("Both password are not matching....");
			document.f1.pass.value="";
       
        return;
	  }
	 
	
	document.f1.submit();
	alert("Data Submitted...");

}