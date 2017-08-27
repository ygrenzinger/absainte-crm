/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterialFirebase } from './material.firebase';

describe('MaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialFirebase]
    });
  });

  it('should ...', inject([MaterialFirebase], (service: MaterialFirebase) => {
    expect(service).toBeTruthy();
  }));
});
