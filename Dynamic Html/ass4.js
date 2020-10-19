// JavaScript source code
 function PalindromeCheck(num)
        {
            var res=0;
            
           
            var r;
            var n;
            n=num;
            
            while(num>0)
            {
               alert(num);
              
                r=num%10;
                num=(num/10)-(r/10);
                res=res*10+r;
                
               
            }
            if(n==res)
            {
                  document.getElementById("palindrome").innerHTML="number "+n+" is a palindrome";
            }
              
            else
            {
                document.getElementById("palindrome").innerHTML="number "+n+" is not a palindrome";
            }
                
        }


