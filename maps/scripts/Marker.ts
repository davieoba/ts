export class Marker {
  constructor() { }


  addMarker(map, obj) {
    new google.maps.Marker({
      map: map,
      position: {
        lat: obj.position.lat,
        lng: obj.postition.long
      }
    })
  }
}



// new Marker.addMarker()