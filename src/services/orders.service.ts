import { IOrders } from '../interfaces';
import { OrdersModel } from '../models';

export default class OrdersService {
  public model = new OrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();

    return orders;
  }
}
