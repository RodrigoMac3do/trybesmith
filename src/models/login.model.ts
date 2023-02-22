import { RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces';
import mysql from './connection';

export default class LoginModel {
  private connection = mysql;

  public async signIn(body: ILogin): Promise<ILogin> {
    const { username, password } = body;

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

    const [[row]] = await this.connection.execute<ILogin[] & RowDataPacket[]>(
      query,
      [username, password],
    );

    return row;
  }
}
