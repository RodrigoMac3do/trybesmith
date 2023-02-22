import { RequestHandler } from 'express';
import { ProductsService } from '../services';
import { productSchema } from '../services/validations/Schema';
import ValidateSchema from '../services/validations/ValidationSchema';

export default class ProductsController {
  private service: ProductsService;

  private validateSchema: ValidateSchema;

  constructor() {
    this.service = new ProductsService();
    this.validateSchema = new ValidateSchema();
  }

  public findAll: RequestHandler = async (_req, res) => {
    const products = await this.service.findAll();

    res.status(200).json(products);
  };

  public create: RequestHandler = async (req, res) => {
    const { body } = req;

    await this.validateSchema.validate(productSchema, body);

    const product = await this.service.create(body);

    res.status(201).json(product);
  };
}
