import '_'from 'lodash'
// JavaScript source code
 function fact(n1)
        {
            var f=1;
            while(n1>0)
            {
                f*=n1;
                n1--;
            }
            
             document.getElementById("fact").innerHTML="factorial of n1 : "+ f;
        }
       