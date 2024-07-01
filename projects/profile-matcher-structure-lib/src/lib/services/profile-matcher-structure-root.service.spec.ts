import { TestBed } from '@angular/core/testing';

import { ProfileMatcherStructureRootService } from './profile-matcher-structure-root.service';

describe('ProfileMatcherStructureRootService', () => {
  let service: ProfileMatcherStructureRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileMatcherStructureRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
