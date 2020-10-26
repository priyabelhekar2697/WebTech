 function DisplayClock()
        {
        var TimeDisp=new Date()
       
        var hh=TimeDisp.getHours();
        var mm=TimeDisp.getMinutes();
        var ss=TimeDisp.getSeconds();

        document.getElementById("tm").innerHTML="Time : "+hh+":"+mm+":"+ss;
        setTimeout(function(){DisplayClock();},1000);
        }