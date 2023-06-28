
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Customer {
  private _name: string
  private readonly _email: string
  private readonly _address: string
  private _active: boolean

  constructor (name: string, email: string, address: string) {
    this._name = name
    this._email = email
    this._address = address
    this._active = false
    this.validate()
  }

  private validate (): void {
    if (this._email) throw new Error('Email is required')
    if (this._name) throw new Error('Name is required')
  }

  public changeName (name: string): void {
    this._name = name
  }

  public toggleActive (): void {
    this._active = !this._active
  }
}
