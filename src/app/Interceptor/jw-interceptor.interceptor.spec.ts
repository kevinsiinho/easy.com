import { TestBed } from '@angular/core/testing';

import { JwInterceptorInterceptor } from './jw-interceptor.interceptor';

describe('JwInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwInterceptorInterceptor = TestBed.inject(JwInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
