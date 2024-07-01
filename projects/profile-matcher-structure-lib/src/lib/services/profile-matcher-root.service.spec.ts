import { TestBed } from '@angular/core/testing';

import { ProfileMatcherRootService } from './profile-matcher-root.service';

describe('ProfileMatcherStructureRootService', () => {
  let service: ProfileMatcherRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileMatcherRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
