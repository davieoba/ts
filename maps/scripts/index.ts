import { User } from './User'
import { Company } from './Company'
import { GoogleMap } from './Maps'
import { Marker } from "./Marker"


const apiKey: string = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'
// const user1 = new User()
// const { lat, long }: { lat: number; long: number; } = user1.location

// console.log(user1)


const user = new User()
const company = new Company()
// const map = new GoogleMap('map').addUserMarker(user).addCompanyMarker(company)
const map = new GoogleMap('map').addMarker(user).addMarker(company)

// trying to create the marker class
// new Marker.addMarker(map, user)
// new Marker.addMarker(map, company)



// function initMap(): void {
//   const lagos = {
//     lat: 6.5244, lng: 3.3792
//   }

//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 2,
//     center: lagos
//   })

//   const marker = new google.maps.Marker({
//     position: lagos,
//     map: map
//   })
// }

// // initMap()
