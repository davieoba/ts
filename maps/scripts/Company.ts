import fakerEn from '@faker-js/faker/locale/en';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  }

  constructor() {
    this.companyName = fakerEn.company.companyName()
    this.catchPhrase = fakerEn.company.catchPhrase()
    this.location = {
      lat: parseFloat(fakerEn.address.latitude()),
      long: parseFloat(fakerEn.address.longitude())
    }
  }

  markerContent(): string {
    return `<div>
              <h1>Company name is: ${this.companyName} </h1>
              <h3>Company catchphrase: ${this.catchPhrase} </h3>
            </div>
            `
  }
}