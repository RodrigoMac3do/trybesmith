import { Request, Response } from 'express';
import ProductsService from '../services';

export default class ProductsController {
  public productsService = new ProductsService();

  async create(req: Request, res: Response) {
    const products = req.body;

    const productsCreated = await this.productsService.create(products);
    res.status(201).json(productsCreated);
  }
}
