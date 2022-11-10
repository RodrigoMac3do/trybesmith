import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProductsID, IProducts } from '../interfaces';
import mysql from './db/connection';

export default class ProductsModel {
  private connection = mysql;

  public async getAll(): Promise<IProductsID[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [rows] = await this.connection.execute<
    IProductsID[] & RowDataPacket[]
    >(query);

    return rows;
  }

  public async create(products: IProducts): Promise<IProductsID> {
    const { name, amount } = products;

    const query = `
    INSERT INTO Trybesmith.Products 
      (name, amount)
    VALUES
      (?, ?)`;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );

    return { id: insertId, ...products };
  }
}
