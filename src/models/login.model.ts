import { RowDataPacket } from 'mysql2/promise';
import { ILogin, IToken } from '../interfaces';
import mysql from './connection';

export default class LoginModel {
  private connection = mysql;

  public signIn = async (body: ILogin): Promise<ILogin> => {
    const { username, password } = body;

    const query = `
    SELECT  
      *
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
  };

  public validate = async (payload: IToken): Promise<IToken | undefined> => {
    const { id, username, classe, level } = payload;

    const query = `
    SELECT
      *
    FROM
      Trybesmith.Users
    WHERE
      id = ?
      AND username = ?
      AND classe = ?
      AND level = ?
    `;

    const [[row]] = await this.connection.execute<IToken[] & RowDataPacket[]>(
      query,
      [id, username, classe, level],
    );

    return row;
  };
}
