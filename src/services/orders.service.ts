import { IOrders } from '../interfaces';
import { OrdersModel } from '../models';

export default class OrdersService {
  public orders = new OrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.orders.getAll();

    return orders;
  }
}
