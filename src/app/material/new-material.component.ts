import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { Material } from './material'
import { MaterialFirebase } from './material.firebase'

@Component({
  selector: 'new-material',
  providers: [ MaterialFirebase ],
  templateUrl: './new-material.component.html',
  styleUrls: ['./material.component.css']
})
export class NewMaterialComponent {
  material = new Material('', 0, 0)

  constructor(
    private router: Router,
    private materialService: MaterialFirebase
  ) { }

  create() {
    this.materialService.create(this.material.toJSON())
      .then(result => this.router.navigate(['/material']))
      .catch(err => console.log(err, 'Error when creating material'))
  }

}
