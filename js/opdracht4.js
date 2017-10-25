function main() {
  var btn = document.getElementsByClassName('btn-line')[0];
  var foto = document.getElementsByClassName('ik')[0];
  var txt = document.getElementsByClassName('hidden-txt')[0];

  btn.onclick = function(){
    this.style.display = "none";
    foto.style.display = "block";
    txt.style.display = "block";
  };

}

window.onload = function() {
       main();
}
