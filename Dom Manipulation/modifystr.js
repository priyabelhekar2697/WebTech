// JavaScript source code


function Modify() {

    var arrlist = document.getElementsByTagName("li");

    for (i = 0; i < arrlist.length; i++) {

        str = "<img src='Images/" + arrlist[i].innerHTML + ".jpg' " + "height=100 width=100/>";

        arrlist[i].innerHTML = str;
    }
    document.getElementById("b1").disabled = true;
}