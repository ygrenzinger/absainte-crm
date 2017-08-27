export class Collection {
    private _name: string

    constructor(
        name: string
    ) {
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    toJSON() { 
        return {
            name:       this.name
        }
    }

    static fromJSON(json) {
        return new Collection(
            json.name
        )
    }

}
