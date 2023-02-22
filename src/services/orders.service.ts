import { IOrders } from '../interfaces';
import { OrdersModel, ProductsModel } from '../models';

export default class OrdersService {
  private model: OrdersModel;

  private modelProducts: ProductsModel;

  constructor() {
    this.model = new OrdersModel();
    this.modelProducts = new ProductsModel();
  }

  public findAll = async (): Promise<IOrders[]> => {
    const orders = await this.model.findAll();

    return orders;
  };

  public create = async (userId: number, body: IOrders): Promise<IOrders> => {
    const { productsIds } = body;

    const newOrder = await this.model.create(userId);

    await Promise.all(
      productsIds.map((id) => this.modelProducts.update(newOrder, id)),
    );

    return { userId, productsIds };
  };
}
