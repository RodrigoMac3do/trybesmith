export interface IProducts {
  name: string;
  amount: string;
  orderId?: number;
}

export interface IProductsID extends IProducts {
  id: number;
}
