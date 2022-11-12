import { RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces';
import mysql from './db/connection';

export default class LoginModel {
  private connection = mysql;

  public async verify(user: ILogin): Promise<ILogin> {
    const { username, password } = user;

    const query = `
    SELECT  
      username, password
    FROM
      Trybesmith.Users
    WHERE 
      username = ?
    AND 
      password = ?
    `;

    const [[row]] = await this.connection.execute<(
    ILogin & RowDataPacket)[]>(
      query,
      [username, password],
      );

    return row;
  }
}
