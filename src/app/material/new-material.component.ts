import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { Material } from './material'
import { MaterialService } from './material.service'

@Component({
  selector: 'new-material',
  providers: [ MaterialService ],
  templateUrl: './new-material.component.html',
  styleUrls: ['./material.component.css']
})
export class NewMaterialComponent {
  material = new Material('', 0, 0)

  constructor(
    private router: Router,
    private materialService: MaterialService
  ) { }

  create() {
    this.materialService.create(this.material.toJSON())
      .then(result => this.router.navigate(['/material']))
      .catch(err => console.log(err, 'Error when creating material'))
  }

}
