import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import 'rxjs/add/operator/map'

@Injectable()
export class MaterialFirebase {
  private materials: FirebaseListObservable<any[]>

  constructor(private af: AngularFireDatabase) {
    this.materials = this.af.list('/materials')
  }

  getMaterials(): FirebaseListObservable<any[]> {
    return this.materials
  }

  findByKey(key: string): FirebaseObjectObservable<any> {
    return <FirebaseObjectObservable<any>>this.af.object('/materials/' + key)
  }

  create(material: any) {
    return this.materials.push(material)
  }

  update(key: string, material: any) {
    return this.af.object('/materials/' + key).set(material)
  }

  remove(key: string) {
    return this.materials.remove(key)
  }

}
