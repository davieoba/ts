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
}