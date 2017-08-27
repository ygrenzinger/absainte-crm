import { Collection } from '../collection/collection'
import { Material } from '../material/material'
import { MaterialFirebase } from '../material/material.firebase'

export class MaterialInUse {
    constructor(
        public key: string,
        public quantity: number
    ) { }
}

interface LinkedMaterial {
    [key: string]: Material;
}

export class Product {
    private _key: string
    private _name: string
    private _collectionName: string
    private _resellerPrice: number
    private _workTime: number
    private _materialsInUse: MaterialInUse[]

    private hourlyRate: number = 15
    private resellerToCustomerRate = 2.5

    constructor(
        name: string,
        collectionName: string,
        resellerPrice: number,
        workTime: number,
        matererialInUse?: MaterialInUse[],
        key?: string
    ) {
        this._name = name
        this._collectionName = collectionName
        this._resellerPrice = resellerPrice
        this._workTime = workTime
        this._materialsInUse = matererialInUse
        this._key = key
    }

    get customerPrice() : number {
        return this._resellerPrice * this.resellerToCustomerRate;
    }

    get key(): string {
        return this._key
    }

    set key(key: string) {
        this._key = key
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get collectionName(): string {
        return this._collectionName
    }

    set collectionName(collectionName: string) {
        this._collectionName = collectionName
    }

    get resellerPrice(): number {
        return this._resellerPrice
    }

    set resellerPrice(resellerPrice: number) {
        this._resellerPrice = resellerPrice
    }

    get workTime(): number {
        return this._workTime
    }

    set workTime(workTime: number) {
        this._workTime = workTime
    }

    addMaterialsInUse(addingMaterialsInUse: MaterialInUse) {
        this._materialsInUse.push(addingMaterialsInUse)
    }

    materialsInUseToJSON(materialsInUse: MaterialInUse[]) {
        return materialsInUse.map(m => {
            return {
                key: m.key,
                quantity: m.quantity
            }
        } )
    }

    toJSON() { 
        return {
            name:           this.name,
            collectionName: this.collectionName,
            resellerPrice:  this.resellerPrice,
            materialsInUse: this.materialsInUseToJSON(this._materialsInUse)
        }
    }

    static materialInUseFromJSON(json): MaterialInUse[] {
        return json.map(m => new MaterialInUse(m.key, m.quantity))
    }

    static fromJSON(json): Product {
        let materialsInUse: MaterialInUse[] = []
        if (json.materialsInUse) {
            materialsInUse = Product.materialInUseFromJSON(json.materialsInUse)
        }
        return new Product(
            json.name,
            json.collectionName,
            json.resellerPrice,
            json.workTime,
            materialsInUse,
            json.$key
        )
    }

}
