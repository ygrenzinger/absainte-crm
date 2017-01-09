import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { NgForm } from '@angular/forms';
import { Material } from '../domain/material';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  closeResult: String;
  materials: FirebaseListObservable<Material[]>;
  material = new Material('', 0, 0);

  constructor(
    private af: AngularFire,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.materials = this.af.database.list('/materials');
    console.log(this.materials);
  }

  save(event) {
    console.log("Submited " + JSON.stringify(this.material));
    this.af.database.object('/materials/' + this.material.name).set(this.material);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
