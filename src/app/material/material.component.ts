import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2'

import { DeleteModalContent } from '../delete-modal.component'

import { MaterialJSON, Material } from './material'
import { MaterialService }        from './material.service'

@Component({
  selector: 'material',
  providers: [ MaterialService ],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  closeResult: string
  materialToBeDeleted: Material
  materials: FirebaseListObservable<MaterialJSON[]>

  constructor(
    private materialService: MaterialService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.materials = this.materialService.getMaterials()
  }

  create() {
    this.router.navigate(['/material/new'])
  }

  edit(key) {
    this.router.navigate(['/material', key])
  }

  deleteModal(material: any) {
    const modalRef = this.modalService.open(DeleteModalContent)
    modalRef.componentInstance.type = 'material'
    modalRef.componentInstance.name = material.name
    modalRef.result.then((result) => {
      if (result) {
        this.materialService.remove(material.$key)
      }
    }, (_) => {})
  }

}
