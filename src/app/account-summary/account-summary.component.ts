import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../accounts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-summary',
  imports: [CommonModule],
  templateUrl: './account-summary.component.html',
  styleUrl: './account-summary.component.css'
})
export class AccountSummaryComponent {
  @Input() account!: Account;
  @Output() withdrawalClicked = new EventEmitter<null>();
  @Output() transferClicked = new EventEmitter<null>();

  withdrawalButtonClicked() {
    this.withdrawalClicked.emit();
  }
  transferButtonClicked() {
    this.transferClicked.emit();
  }
}
