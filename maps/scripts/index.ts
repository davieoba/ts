import { User } from './User'
import { Company } from './Company'

const apiKey: string = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'
const user1 = new User()
const { lat, long }: { lat: number; long: number; } = user1.location

// console.log(user1)
// console.log('hello world')
const mapElement = document.querySelector('#map')
// console.log(mapElement)


new google.maps.Map(document.querySelector('#map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 1
  }
})