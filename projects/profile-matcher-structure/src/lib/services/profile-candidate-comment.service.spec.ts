import { TestBed } from '@angular/core/testing';

import { ProfileCandidateCommentService } from './profile-candidate-comment.service';

describe('ProfileCandidateCommentService', () => {
  let service: ProfileCandidateCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCandidateCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
