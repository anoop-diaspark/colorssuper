import { TestBed, async, inject } from '@angular/core/testing';

import { ShowsGuard } from './shows.guard';

describe('ShowsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowsGuard]
    });
  });

  it('should ...', inject([ShowsGuard], (guard: ShowsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
