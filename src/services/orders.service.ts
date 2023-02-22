import { IOrders, IToken } from '../interfaces';
import { OrdersModel, ProductsModel, LoginModel } from '../models';
import HttpException from '../utils/HttpException';

export default class OrdersService {
  private model: OrdersModel;

  private modelLogin: LoginModel;

  private modelProducts: ProductsModel;

  constructor() {
    this.model = new OrdersModel();
    this.modelProducts = new ProductsModel();
    this.modelLogin = new LoginModel();
  }

  public findAll = async (): Promise<IOrders[]> => {
    const orders = await this.model.findAll();

    return orders;
  };

  public create = async (payload: IToken, body: IOrders): Promise<IOrders> => {
    const user = await this.modelLogin.validate(payload);

    if (!user) {
      throw new HttpException(404, 'Usuário não cadastrado');
    }

    const insertId = await this.model.create(user.id);

    await Promise.all(
      body.productsIds.map((id) => this.modelProducts.update(insertId, id)),
    );

    return { userId: user.id, productsIds: body.productsIds };
  };
}
