export interface CustomMap {
  location: {
    lat: number;
    long: number
  };
  markerContent?: () => string;
}

export class GoogleMap {
  // a reference to google map, so google.maps.Map is the TYPE of googleMap which happens to be a class 
  //public firstName: string
  private googleMap: google.maps.Map // is of type google.maps.Map
  // private googleMap // is of type => any
  // so one of the advantages of doing this is that googleMap is not of type any and then I can see all the properties accessible to this instance

  // just like if it is a string, david.toUppercase() - ts would know that toUppercase() is a property of david because david is a string

  constructor(div: string) {
    this.googleMap = new google.maps.Map(document.getElementById(div), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(obj: CustomMap) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.long
      }
    })

    marker.addListener('click', function () {
      const infoWindow = new google.maps.InfoWindow({
        content: obj.markerContent()
      })
      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
        shouldFocus: false
      })
    })

    return this
  }

}