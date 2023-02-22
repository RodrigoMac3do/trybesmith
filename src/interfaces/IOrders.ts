export interface IOrders {
  productsIds: number[];
  userId?: number;
}

export interface IOrdersID extends IOrders {
  id: number;
}
