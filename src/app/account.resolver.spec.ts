import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { accountResolver } from './account.resolver';
import { Account } from './accounts';

describe('accountResolver', () => {
  const executeResolver: ResolveFn<Account | undefined> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => accountResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
