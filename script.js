 
var posElt;

var posLinkElt;

window.addEventListener('load',function(){

  posElt = document.getElementById('Pos');
  posLinkElt = document.querySelector('#PosLink > a');

  // if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(geoposOK,geoposKO);

  // }

 // else { 

 // }

});

function geoposOK(pos){

  var lat = pos.coords.latitude;
  var long = pos.coords.longitude;

  posElt.textContent = `${lat}, ${long}`;

  posLinkElt.href=`https://maps.google.com/?q=${lat},${long}`;

  posLinkElt.textContent = 'Mostrar tu posicion en un mapa';



};

function geoposKO(err){

console.warn(err.message);

let msg;
switch(err.code){

  case err.PERMISSION_DENIED:

    msg = "No nos han dado permiso para obtener ubicacion";
    break;

    case err.PERMISSION_UNAVAILABLE:

      msg = "La posicion actual no esta disponible";
      break;

      case err.TIMEOUT:

      msg = "No se ha podido obtener la ubicacion en un tiempo prudencial";
      break;

      default:

      msg = "No se ha podido obtener la ubicacion en un tiempo prudencial";
      break;
      
      
}
posElt.textContent = msg;

};
