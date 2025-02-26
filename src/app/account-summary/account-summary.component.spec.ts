import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSummaryComponent } from './account-summary.component';
import { accounts } from '../accounts';

describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    component.account = accounts[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
