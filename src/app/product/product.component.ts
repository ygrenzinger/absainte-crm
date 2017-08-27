import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import { Subscription } from 'rxjs'

import { DeleteModalContent } from '../delete-modal.component'

import { Product } from './product'
import { ProductFirebase }        from './product.firebase'

@Component({
  selector: 'product',
  providers: [ ProductFirebase ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  closeResult: string
  productToBeDeleted: ProductFirebase
  products: Product[]

  constructor(
    private productFirebase: ProductFirebase,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscription = this.productFirebase.getProducts().subscribe(products=>{
      this.products = products.map(product => Product.fromJSON(product))
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  create() {
    this.router.navigate(['/product/new'])
  }

  edit(key) {
    this.router.navigate(['/product', key])
  }

  deleteModal(product: Product) {
    const modalRef = this.modalService.open(DeleteModalContent)
    modalRef.componentInstance.type = 'product'
    modalRef.componentInstance.name = product.name
    modalRef.result.then((result) => {
      if (result) {
        this.productFirebase.remove(product.key)
      }
    }, (_) => {})
  }

}
