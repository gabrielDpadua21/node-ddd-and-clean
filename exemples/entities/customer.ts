
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Customer {
  private _name: string
  private _email: string
  private _address: string
  private _active: boolean

  constructor (name, email, address) {
    this._name = name
    this._email = email
    this._address = address
    this._active = false
  }

  get name (): string {
    return this._name
  }

  get email (): string {
    return this._email
  }

  get address (): string {
    return this._address
  }

  get active (): boolean {
    return this._active
  }

  set name (value: string) {
    this._name = value
  }

  set active (value: boolean) {
    this._active = value
  }

  set email (value: string) {
    this._email = value
  }

  set address (value: string) {
    this._address = value
  }
}
