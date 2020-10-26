
// JavaScript source code
function Validate()
        {
            var fnm=document.f1.fnm.value;
            var patt=/^[A-Z][a-z]{2,}$/;

             flag=false;

            if( patt.test(fnm) == flag )
            {
                alert("First letter should be capital...");
                document.f1.fnm.value="";
                document.f1.fnm.focus();
                return;
            }

            var full=document.f1.full.value;
            var patt1=/^[A-Z][a-z]{2,}\s[A-z][a-z]{2,}$/;
            var patt2=/^[A-Z][a-z]{2,}$/;

            var flag1=true;
            if(patt2.test(full) == flag1)
            {
       
                alert("first Name should be followed by last Name...");
                 document.f1.full.value="";
                document.f1.full.focus();
                return;
			}
            if(patt1.test(full)==flag)
            {
            
                 alert("First letter of first name and last name should be capital...");
                 document.f1.full.value="";
                document.f1.full.focus();
                return;
			}

            var mb=document.f1.mbl.value;
            var patt3=/[0-9]{10}$/;

            if(patt3.test(mb) == flag)
            {
                alert("Mobile number should be of 10 digit...");
                document.f1.mbl.value="";
                document.f1.mbl.focus();
                return;
        
			}

            var em=document.f1.eml.value;
            var patt4=/^\w{3,}@\w{3,}\.\w{2,3}$/;
             
            if(patt4.test(em) == flag )
            {
       
                alert("Enter valid email id..");
                document.f1.eml.value="";
                document.f1.eml.focus();
                return;
			}

            var em=document.f1.crs.value;
            var patt5=/[P,G]\-[A-Z]{3,8}$/;
             
            if(patt5.test(em) == flag )
            {
       
                alert("Enter valid course name..");
                document.f1.crs.value="";
                document.f1.crs.focus();
                return;
			}

            document.f1.submit();
            alert("Data Submitted....");
        }
