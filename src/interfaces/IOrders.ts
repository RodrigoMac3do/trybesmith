export interface IOrdersID {
  id: number;
}

export interface IOrders extends IOrdersID {
  userId: number;
  productsId: number[];
}
