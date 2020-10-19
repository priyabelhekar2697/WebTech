// JavaScript source code
 function Addition()
    {
         var no = prompt("Enter the length of array ");
        var len = parseInt(no);
        var arr=[];
        for(i=0;i<len;i++)
        {
            var val = prompt("Enter the elements of array ");
             arr[i] = parseInt(val);
        }

        var sum = arr.reduce(add(value){return initial_val + val;})

       
        
        document.getElementById("ADD").innerHTML="Addition of elements in array is : "+sum;
    }