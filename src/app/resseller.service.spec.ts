/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RessellerService } from './resseller.service';

describe('RessellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RessellerService]
    });
  });

  it('should ...', inject([RessellerService], (service: RessellerService) => {
    expect(service).toBeTruthy();
  }));
});
