export default class Address {
  private readonly _street: string
  private readonly _number: number
  private readonly _complement: string
  private readonly _city: string
  private readonly _state: string

  constructor (street: string, number: number, complement: string, city: string, state: string) {
    this._street = street
    this._number = number
    this._complement = complement
    this._city = city
    this._state = state
    this.validate()
  }

  public validate (): void {
    if (this._street.length === 0) throw new Error('Street is required')
    if (this._city.length === 0) throw new Error('City is required')
    if (this._state.length === 0) throw new Error('State is required')
  }
}
