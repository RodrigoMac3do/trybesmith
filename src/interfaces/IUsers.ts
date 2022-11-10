export interface IUsers {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUsersID extends IUsers {
  id: number;
}
