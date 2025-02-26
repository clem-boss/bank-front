import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
      providers: [Router]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Dashboard', () => {
    expect(component).toBeTruthy();
  });

  it('should display corresponding accounts', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Current Account');
    expect(compiled.textContent).toContain('Savings Account');
    expect(compiled.textContent).toContain('Business Account');
  });

  describe(('Buttons'), () => {
    it('should redirect to withdrawal page', () => {
      const fixture = TestBed.createComponent(DashboardPageComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const withdrawalButton = compiled.querySelector('button.withdrawal') as HTMLButtonElement;
      const routerSpy = jest.spyOn(router, 'navigate');
      withdrawalButton.click();
      expect(routerSpy).toHaveBeenCalledWith(['accounts', 1, 'withdrawal']);
    });

    it('should redirect to transfer page', () => {
      const fixture = TestBed.createComponent(DashboardPageComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const transferButton = compiled.querySelector('button.transfer') as HTMLButtonElement;
      const routerSpy = jest.spyOn(router, 'navigate');
      transferButton.click();
      expect(routerSpy).toHaveBeenCalledWith(['accounts', 1, 'transfer']);
    });
  })
});
