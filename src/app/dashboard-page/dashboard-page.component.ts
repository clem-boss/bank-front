import { Component, inject } from '@angular/core';
import { Account, Transaction } from '../accounts';
import { Router } from '@angular/router';
import { AccountSummaryComponent } from '../account-summary/account-summary.component';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  imports: [AccountSummaryComponent, CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  private readonly router = inject(Router);
  accounts!: Account[];
  transactions!: Transaction[];

  constructor(protected accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    this.transactions = this.accountService.getTransactions();
  }

  goToTransferPage(account: Account) {
    this.router.navigate(['accounts', account.id, 'transfer'])
  }

  goToWithdrawalPage(account: Account) {
    this.router.navigate(['accounts', account.id, 'withdrawal'])
  }
}
