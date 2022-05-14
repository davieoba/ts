import { User } from './User'
import { Company } from './Company'
import { GoogleMap } from './Maps'

const apiKey: string = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'
// const user1 = new User()
// const { lat, long }: { lat: number; long: number; } = user1.location

// console.log(user1)



new GoogleMap('#map')

function initMap(): void {
  const lagos = {
    lat: 6.5244, lng: 3.3792
  }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: lagos
  })

  const marker = new google.maps.Marker({
    position: lagos,
    map: map
  })
}

initMap()
