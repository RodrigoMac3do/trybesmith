import { Request, Response } from 'express';
import { OrdersService } from '../services';

export default class OrdersController {
  public service = new OrdersService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.service.getAll();

    res.status(200).json(orders);
  }
}
