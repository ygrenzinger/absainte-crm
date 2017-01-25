import { Injectable } from '@angular/core'
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2'
import { MaterialJSON } from './material'

@Injectable()
export class MaterialService {
  private materials: FirebaseListObservable<MaterialJSON[]>

  constructor(private af: AngularFire) {
    this.materials = this.af.database.list('/materials')
  }

  getMaterials(): FirebaseListObservable<MaterialJSON[]> {
    return this.materials
  }

  findByKey(key: string): FirebaseObjectObservable<MaterialJSON> {
    return <FirebaseObjectObservable<MaterialJSON>>this.af.database.object('/materials/' + key)
  }

  create(material: MaterialJSON) {
    console.log('create : ' + JSON.stringify(material))
    return this.materials.push(material)
  }

  update(key: string, material: MaterialJSON) {
    console.log('update '+'/materials/' + key+': ' + JSON.stringify(material))
    return this.af.database.object('/materials/' + key).set(material)
  }

  remove(key: string) {
    return this.materials.remove(key)
  }

}
