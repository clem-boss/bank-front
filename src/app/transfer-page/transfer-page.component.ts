import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../accounts';
import { AccountService } from '../account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transfer-page',
  imports: [ReactiveFormsModule],
  templateUrl: './transfer-page.component.html',
  styleUrl: './transfer-page.component.css'
})
export class TransferPageComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  account: Account = this.route.snapshot.data['account'];
  recipientAccounts!: Account[];
  transferForm = new FormGroup({
    recipient: new FormControl<number | null>(null, Validators.required),
    amount: new FormControl<number>(1, Validators.required)
  });
  subscription!: Subscription;

  constructor(protected accountService: AccountService) {}

  ngOnInit() {
    this.subscription = this.accountService.getAccounts().subscribe(accounts => {
      this.recipientAccounts = accounts.filter(account => account.id !== this.account.id);
    });
  }

  executeTransfer() {
    const recipient = this.transferForm.value.recipient;
    const amount = this.transferForm.value.amount;
    if (!recipient || !amount) {
      return;
    }
    this.accountService.postTransaction(this.account.id, recipient, amount).subscribe({
      next: (response) => {
        console.log('Transaction posted successfully', response);
      },
      error: (error) => {
        console.error('Error posting transaction', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
