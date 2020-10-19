// JavaScript source code


function changeToPara() {
    var str = "";
    var trarr = document.getElementsByTagName("tr");
    for (i = 0; i < trarr.length; i++) {
        var tdnodes = trarr[i].getElementsByTagName("td");
        str += "<div>";
        str += "<h1>" + tdnodes[0].innerHTML + "</h1>";
        str += tdnodes[1].innerHTML;
        str += "<p><b>" + tdnodes[2].firstChild.nodeValue + "</b></p>";
        str += "</div>";
    }
    document.getElementById("content").innerHTML = str;
}