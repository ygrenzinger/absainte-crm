import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { MaterialInUse, Product } from './product'
import { ProductFirebase } from './product.firebase'

@Component({
  selector: 'new-product',
  providers: [ ProductFirebase ],
  templateUrl: './new-product.component.html',
  styleUrls: ['./product.component.css']
})
export class NewProductComponent {

  heroForm: FormGroup;

  product = new Product('', '', 0, 0, [])
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
  quantity = 0

  constructor(
    private router: Router,
    private materialService: ProductFirebase
  ) { }

  create() {
    this.materialService.create(this.product.toJSON())
      .then(result => this.router.navigate(['/product']))
      .catch(err => console.log(err, 'Error when creating product'))
  }

}
