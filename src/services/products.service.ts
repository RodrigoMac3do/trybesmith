import { IProductsID, IProducts } from '../interfaces';
import ProductsModel from '../models';

export default class ProductsService {
  public products = new ProductsModel();

  public async getAll(): Promise<IProductsID[]> {
    const products = await this.products.getAll();
    return products;
  }

  public create(products: IProducts): Promise<IProductsID> {
    return this.products.create(products);
  }
}
