const mapboxgl = require("mapbox-gl");

function buildMarker(type, coord) {
  var image;
  if(type === "activity") {
    image = "http://i.imgur.com/WbMOfMl.png"
  } else if (type === "hotel") {
    image = "http://i.imgur.com/D9574Cu.png";
  } else {
    image = "http://i.imgur.com/cqR6pUI.png";
  }

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${image})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(`${coord}`).addTo(map);
}

module.exports = buildMarker;
