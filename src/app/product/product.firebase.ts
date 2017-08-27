import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductFirebase {
  private products: FirebaseListObservable<any[]>

  constructor(private af: AngularFireDatabase) {
    this.products = this.af.list('/products')
  }

  getProducts(): FirebaseListObservable<any[]> {
    return this.products
  }

  findByKey(key: string): FirebaseObjectObservable<any> {
    return <FirebaseObjectObservable<any>>this.af.object('/products/' + key)
  }

  create(product: any) {
    return this.products.push(product)
  }

  update(key: string, product: any) {
    return this.af.object('/products/' + key).set(product)
  }

  remove(key: string) {
    return this.products.remove(key)
  }

}
