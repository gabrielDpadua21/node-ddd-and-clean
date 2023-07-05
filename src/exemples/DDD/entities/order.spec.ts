import Order from './order'
import OrderItem from './orderItem'

describe('Order entity', () => {
  test('It should throw an error if id is empty', async () => {
    expect(() => {
      const order = new Order('', '1', [], 1)
      order.total()
    }).toThrowError('Id is required')
  })

  test('It should throw an error if customer id is empty', async () => {
    expect(() => {
      const order = new Order('1', '', [], 1)
      order.total()
    }).toThrowError('CustomerId is required')
  })

  test('It should throw an error if items is empty', async () => {
    expect(() => {
      const order = new Order('1', '1', [], 1)
      order.total()
    }).toThrowError('Does not have items')
  })

  test('It return total one item', async () => {
    const item = new OrderItem('1', 'name', 1)
    const order = new Order('1', '1', [item], 1)
    expect(order.total()).toBe(1)
  })
})
