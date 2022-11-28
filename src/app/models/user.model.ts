export interface Name {
  readonly nameFirstname: string;
  readonly nameLastname: string;
}

export interface Geolocation {
  readonly lat: string;
  readonly long: string;
}

export interface Address {
  readonly city: string;
  readonly street: string;
  readonly number: number;
  readonly zipcode: string;
  readonly geolocation: Geolocation;
}

export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: Name;
  readonly address: Address;
  readonly phone: string;
}
