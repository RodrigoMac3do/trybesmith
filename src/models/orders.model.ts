import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces';
import mysql from './connection';

export default class OrdersModel {
  private connection = mysql;

  public findAll = async (): Promise<IOrders[]> => {
    const query = `
    SELECT 
      O.id AS id,
      O.userId AS userId,
      JSON_ARRAYAGG(P.id) AS productsIds
    FROM 
      Trybesmith.Orders AS O
    INNER JOIN 
      Trybesmith.Products AS P 
        ON P.orderId = O.id
    GROUP BY 
      id`;

    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      query,
    );

    return rows;
  };

  public create = async (userId: number): Promise<number> => {
    const query = `
    INSERT INTO Trybesmith.Orders
      (userId )
    VALUES 
      (?)`;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [userId],
    );

    return insertId;
  };
}
