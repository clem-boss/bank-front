import { Injectable } from '@angular/core';
import { Account, accounts, Transaction, transactions } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly _accounts = accounts;
  private readonly _transactions = transactions;
  constructor() { }

  getAccounts(): Account[] {
    return this._accounts;
  }

  getAccountById(accountId: number): Account | undefined {
    return this._accounts.find(account => account.id === accountId);
  }

  transfer(from: number, to: number, amount: number) {
    const issuer = this._accounts.find(account => account.id === from);
    const recipient = this._accounts.find(accounts => accounts.id === to);
    if (!issuer || !recipient) {
      throw new Error();
    }

    issuer.balance = issuer.balance-amount;
    recipient.balance = recipient.balance+amount;
    transactions.push({
      amount,
      from,
      to,
      timestamp: Date.now()
    })
  }

  getTransactions(): Transaction[] {
    return this._transactions;
  }
}
