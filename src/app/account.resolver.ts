import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { Account } from './accounts';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';

export const accountResolver: ResolveFn<Observable<Account> | undefined> = (route, state): Observable<Account> | undefined => {
  const userService = inject(AccountService);
  return userService.getAccountById(parseInt(route.params['accountId']));
};
