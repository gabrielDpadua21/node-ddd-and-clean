import Order from '../entities/order'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class OrderService {
  public static total (orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0)
  }
}
