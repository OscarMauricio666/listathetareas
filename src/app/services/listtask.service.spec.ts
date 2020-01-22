import { TestBed } from '@angular/core/testing';

import { ListtaskService } from './listtask.service';

describe('ListtaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListtaskService = TestBed.get(ListtaskService);
    expect(service).toBeTruthy();
  });
});
