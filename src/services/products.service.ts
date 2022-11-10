import { IProductsID, IProducts } from '../interfaces';
import { ProductsModel } from '../models';

export default class ProductsService {
  public products = new ProductsModel();

  public async getAll(): Promise<IProductsID[]> {
    const products = await this.products.getAll();
    
    return products;
  }

  public async create(products: IProducts): Promise<IProductsID> {
    const product = await this.products.create(products);

    return product;
  }
}
