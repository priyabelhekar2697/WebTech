// JavaScript source code


function show()
{
    var divnode = document.getElementById("content");
    var divchild = divnode.childNodes;
    var str = "<table border=1 cellpadding=25 cellspacing=20>";
    for (i = 0; i < divchild.length; i++)
    {
        str += "<tr>";
        if (divchild[i].nodeType == 1)
        {
            if (divchild[i].firstChild != null)
            {
                if (divchild[i].nodeName == "P")
                {
                    str += "<td>" + divchild[i].nodeName + "</td>";
                    str += "<td>" + divchild[i].firstChild.nodeValue + "</td>";
                }
            }
        }
        str += "</tr>";
    }
    str += "</table>";
    document.getElementById("table").innerHTML = str;
}

function hcolour()
{
    var x = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "red";
    }
}

function tcolour()
{
    var x = document.querySelectorAll("[type='text']");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "aqua";
    }
}

function pcolour() {
    var x = document.querySelectorAll("p");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "grey";
    }
}