import fakerEn from '@faker-js/faker/locale/en';

// console.log(fakerEn.name.firstName())
export class User {
  // this is just telling ts the format it is not going to initialize this code 
  name: string
  location: {
    lat: number;
    long: number;
  }

  constructor() {
    this.name = fakerEn.name.firstName()
    this.location = {
      lat: parseFloat(fakerEn.address.latitude()),
      long: parseFloat(fakerEn.address.longitude())
    }
  }
}

// const map1 = new google.maps.Map(document.getElementById('map'))

// console.log(map1)