import { ResultSetHeader } from 'mysql2/promise';

import { IUsers, IUsersID } from '../interfaces';
import mysql from './db/connection';

export default class UsersModel {
  private connection = mysql;

  public async create(user: IUsers): Promise<IUsersID> {
    const { username, classe, level, password } = user;

    const query = `
    INSERT INTO Trybesmith.Users 
      (username, classe, level, password)
    VALUES
      (?, ?, ?, ?)`;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );

    return { id: insertId, ...user };
  }
}
