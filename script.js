var posPeli = 0;
var posSer = 0;

document.getElementById("btn-buscar").onclick = function(){
  var texto = document.getElementById("busqueda").value.toLowerCase();
  var todas = document.querySelectorAll(".cards .card");
  var encontrados = 0;
  for(var i=0;i<todas.length;i++){
    var titulo = todas[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if(titulo.indexOf(texto)!=-1){
      todas[i].style.display="block";
      encontrados++;
    } else {
      todas[i].style.display="none";
    }
  }
  if(encontrados==0) alert("No tenemos ese show por el momento, lo sentimos :(");
};

// Sidebar 
var items = document.querySelectorAll(".cards .card");
var liSidebar = document.querySelectorAll(".sidebar li");
for(var i=0;i<liSidebar.length;i++){
  liSidebar[i].onclick = function(){
    var genero = this.innerText.toLowerCase();
    if(genero=="películas" || genero=="series") return;
    for(var j=0;j<items.length;j++){
      var cardGenero = items[j].getAttribute("title").toLowerCase();
      if(cardGenero.indexOf(genero)!=-1){
        items[j].style.display="block";
      } else {
        items[j].style.display="none";
      }
    }
  }
}

// Sidebar en celular
document.getElementById("btn-menu").onclick = function(){
  var sidebar = document.querySelector(".sidebar");
  if(sidebar.style.display=="block") sidebar.style.display="none";
  else sidebar.style.display="block";
};


