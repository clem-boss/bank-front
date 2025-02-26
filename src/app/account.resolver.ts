import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { Account } from './accounts';
import { AccountService } from './account.service';

export const accountResolver: ResolveFn<Account | undefined> = (route, state): Account | undefined => {
  const userService = inject(AccountService);
  return userService.getAccountById(parseInt(route.params['accountId']));
};
