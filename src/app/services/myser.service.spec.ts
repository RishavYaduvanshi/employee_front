import { TestBed } from '@angular/core/testing';

import { MyserService } from './myser.service';

describe('MyserService', () => {
  let service: MyserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
