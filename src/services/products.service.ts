import { IProductsID, IProducts } from '../interfaces';
import { ProductsModel } from '../models';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public async findAll(): Promise<IProductsID[]> {
    const products = await this.model.findAll();

    return products;
  }

  public async create(product: IProducts): Promise<IProductsID> {
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}
