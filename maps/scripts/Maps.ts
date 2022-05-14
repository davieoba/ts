import { User } from "./User"
import { Company } from './Company'

export class GoogleMap {
  // a reference to google map, so google.maps.Map is the TYPE of googleMap which happens to be a class 
  //public firstName: string
  private googleMap: google.maps.Map

  constructor(HTMLElement: string) {
    this.googleMap = new google.maps.Map(document.querySelector(HTMLElement), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addUserMarker(user: User) {
    new google.maps.Marker()
  }
}