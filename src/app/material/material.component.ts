import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database'
import { Subscription } from 'rxjs'

import { DeleteModalContent } from '../delete-modal.component'

import { Material } from './material'
import { MaterialFirebase }        from './material.firebase'

@Component({
  selector: 'material',
  providers: [ MaterialFirebase ],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  closeResult: string
  materialToBeDeleted: Material
  materials: Material[]

  constructor(
    private materialFirebase: MaterialFirebase,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscription = this.materialFirebase.getMaterials().subscribe(materials=>{
      this.materials = materials.map(material => Material.fromJSON(material))
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  create() {
    this.router.navigate(['/material/new'])
  }

  edit(key) {
    this.router.navigate(['/material', key])
  }

  deleteModal(material: Material) {
    const modalRef = this.modalService.open(DeleteModalContent)
    modalRef.componentInstance.type = 'material'
    modalRef.componentInstance.name = material.name
    modalRef.result.then((result) => {
      if (result) {
        this.materialFirebase.remove(material.key)
      }
    }, (_) => {})
  }

}
