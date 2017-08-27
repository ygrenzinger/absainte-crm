import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'

import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'
import { Subscription } from 'rxjs'

import { Material } from './material'
import { MaterialFirebase } from './material.firebase'

@Component({
  selector: 'material-edit',
  providers: [MaterialFirebase],
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  private key: string
  private material: Material

  constructor(
    private materialService: MaterialFirebase,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['key']
    this.subscription = this.materialService.findByKey(this.key).subscribe(json => {
      this.material = Material.fromJSON(json)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  update() {
    this.materialService.update(this.key, this.material.toJSON())
      .then(result => this.router.navigate(['/material']))
      .catch(err => console.log(err, 'You dont have access!'))
  }

}
