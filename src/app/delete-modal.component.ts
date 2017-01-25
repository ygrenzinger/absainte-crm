import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Are you sure?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Deleting {{type}} {{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="activeModal.close(true)">Confirm</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Cancel</button>
    </div>
  `
})
export class DeleteModalContent {
  @Input() name
  @Input() type

  constructor(public activeModal: NgbActiveModal) {}
}
