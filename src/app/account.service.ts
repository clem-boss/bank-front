import { Injectable } from '@angular/core';
import { Account, Transaction } from './accounts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private readonly http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8080/api/accounts');
  }

  getAccountById(accountId: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/accounts/${accountId}`);
  }

  postTransaction(issuerId: number, recipientId: number, amount: number): Observable<any> {
    return this.http.post(
      `http://localhost:8080/api/transactions?issuerId=${encodeURIComponent(issuerId.toString())}&recipientId=${encodeURIComponent(recipientId.toString())}&amount=${encodeURIComponent(amount.toString())}`,
      {}
    );
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:8080/api/transactions`);
  }
}
