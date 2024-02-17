var mapa = L.map('mapa').setView([-0.20,-78.50],6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

$.getJSON("https://jpanimboza.github.io/OPTE/tesis_2012.geojson",
function(data){
var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION+'<br>\<b>Autor(es): </b>' + feature.properties.AUTOR_O_AUTORES+'<br>\<b>Tutor(es): </b>' + feature.properties.TUTOR_DE_TESIS)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
}); 
