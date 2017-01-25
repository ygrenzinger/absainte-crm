export interface MaterialJSON {
  name:         string
  quantity:     number
  price:        number
  unitCost:     number
}

export class Material implements MaterialJSON {
    private _name:      string
    private _quantity:  number
    private _price:     number
    private _unitCost:  number

    constructor(
        name: string,
        quantity: number,
        price: number,
        unitCost?: number
    ) {
        this._name = name
        this._quantity = quantity
        this._price = price
        if (unitCost == null) {
            this._unitCost = this.computeUnitCost()
        } else {
            this._unitCost = unitCost
        }
    }
    private computeUnitCost() {
        if (this._price < 1 || this._quantity < 1) return 0
        return this._price / this._quantity
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get quantity(): number {
        return this._quantity
    }

    set quantity(quantity: number) {
        this._quantity = quantity
        this._unitCost = this.computeUnitCost()
    }

    get price(): number {
        return this._price
    }

    set price(price: number) {
        this._price = price
        this._unitCost = this.computeUnitCost()
    }

    get unitCost(): number {
        return this._unitCost
    }

    set unitCost(unitCost: number) {
        this._unitCost = unitCost
    }

    toJSON(): MaterialJSON { 
        return {
            name:       this.name,
            quantity:   this.quantity,
            price:      this.price,
            unitCost:   this.unitCost,
        }
    }

    static fromJSON(json: MaterialJSON) {
        return new Material(
            json.name,
            json.quantity,
            json.price,
            json.unitCost
        )
    }


}
