import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TransferPageComponent } from './transfer-page.component';
import { accounts } from '../accounts';

describe('TransferPageComponent', () => {
  let component: TransferPageComponent;
  let fixture: ComponentFixture<TransferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferPageComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {snapshot: {data: {account: accounts[0]}}}
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show a list of recipients', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const selectList = compiled.querySelector('select[name="recipient"]') as HTMLSelectElement;

    expect(selectList.textContent).toContain('Savings Account');
    expect(selectList.textContent).toContain('Business Account');
    expect(selectList.textContent).not.toContain('Current Account');
  });
});
