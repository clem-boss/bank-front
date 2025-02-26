import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../accounts';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transfer-page',
  imports: [ReactiveFormsModule],
  templateUrl: './transfer-page.component.html',
  styleUrl: './transfer-page.component.css'
})
export class TransferPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  account: Account = this.route.snapshot.data['account'];
  recipientAccounts!: Account[];
  transferForm = new FormGroup({
    recipient: new FormControl<Account | null>(null, Validators.required),
    amount: new FormControl<number>(1, Validators.required)
  });

  constructor(protected accountService: AccountService) {}

  ngOnInit() {
    const accounts = this.accountService.getAccounts();
    this.recipientAccounts = accounts.filter(account => account.id !== this.account.id);
  }

  executeTransfer() {
    const recipient = this.transferForm.value.recipient;
    const amount = this.transferForm.value.amount;
    if (!recipient || !amount) {
      return;
    }
    this.accountService.transfer(this.account.id, Number(recipient), amount);
  }
}
