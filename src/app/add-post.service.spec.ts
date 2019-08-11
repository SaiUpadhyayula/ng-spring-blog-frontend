import { TestBed } from '@angular/core/testing';

import { AddPostService } from './add-post.service';

describe('AddPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPostService = TestBed.get(AddPostService);
    expect(service).toBeTruthy();
  });
});
