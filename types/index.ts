export interface Iuser {
  _id?: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IexistingUser {
  email: string;
  password: string;
}
export interface Isongs {
  title: string;
  description: string;
}
