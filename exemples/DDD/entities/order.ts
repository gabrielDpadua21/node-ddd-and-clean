import OrderItem from './orderItem'

export default class Order {
  private readonly _id: string
  private readonly _customerId: string
  private readonly _items: OrderItem[] = []
  private readonly _total: number

  constructor (id: string, customerId: string, items: OrderItem[], total: number) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this._total = total
  }

  public addItem (item: OrderItem): void {
    this._items.push(item)
  }

  public total (): number {
    return this._items.reduce((acc, item) => acc + item.getPrice(), 0)
  }
}
