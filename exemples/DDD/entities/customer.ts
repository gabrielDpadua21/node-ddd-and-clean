import Address from './address'

export default class Customer {
  private readonly _id: string
  private _name: string
  private readonly _email: string
  private _address: Address
  private _active: boolean

  constructor (id: string, name: string, email: string, address: Address) {
    this._id = id
    this._name = name
    this._email = email
    this._address = address
    this._active = false
    this.validate()
  }

  private validate (): void {
    if (this._id.length === 0) throw new Error('Id is required')
    if (this._email.length === 0) throw new Error('Email is required')
    if (this._name.length === 0) throw new Error('Name is required')
  }

  public changeName (name: string): void {
    this._name = name
  }

  public toggleActive (): void {
    this._active = !this._active
  }

  public changeAddress (street: string, number: number, complement: string, city: string, state: string): void {
    this._address = new Address(street, number, complement, city, state)
  }
}
