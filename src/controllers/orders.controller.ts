import { RequestHandler } from 'express';
import { OrdersService } from '../services';
import { ordersSchema } from '../services/validations/Schema';
import ValidateSchema from '../services/validations/ValidationSchema';
import HttpException from '../utils/HttpException';
import Jwt from '../utils/jwt.util';

export default class OrdersController {
  private service: OrdersService;

  private jwt: Jwt;

  private validateSchema: ValidateSchema;

  constructor() {
    this.service = new OrdersService();
    this.validateSchema = new ValidateSchema();
    this.jwt = new Jwt();
  }

  public findAll: RequestHandler = async (_req, res) => {
    const orders = await this.service.findAll();

    res.status(200).json(orders);
  };

  public create: RequestHandler = async (req, res) => {
    const { body } = req;
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException(401, 'Token not found');
    }

    this.jwt.verifyToken(authorization);

    const { id } = this.jwt.decoderToken(authorization);

    await this.validateSchema.validate(ordersSchema, body);

    const order = await this.service.create(id, body);

    res.status(201).json(order);
  };
}
