// JavaScript source code
function calpower(num1,num2)
        {
        alert(num1);
        alert(num2);
            var result=1;
            var i=1;
            while(i <= num2)
            {
                result*=num1;
                i++;
            }
         document.getElementById("pow").innerHTML="power of num1 to num2 : "+ result;

        }