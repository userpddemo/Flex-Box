function setElementId(var id){
    var elementValue = document.getElementById(id).href
}

function viewCode(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("view_code").text =
      this.responseText;
    }
  };
  xhttp.open("GET", elementValue, true);
  xhttp.send();
}
