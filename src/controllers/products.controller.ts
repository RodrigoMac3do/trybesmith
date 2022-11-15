import { Request, Response } from 'express';
import { ProductsService } from '../services';
import { productSchema } from '../services/validations/schema';
import validateSchema from '../services/validations/validationSchema';

export default class ProductsController {
  public productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    await validateSchema(productSchema, body);

    const productsCreated = await this.productsService.create(body);

    res.status(201).json(productsCreated);
  }
}
