import { Routes } from '@angular/router';
import { TransferPageComponent } from './transfer-page/transfer-page.component';
import { WithdrawalPageComponent } from './withdrawal-page/withdrawal-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { accountResolver } from './account.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'accounts',
    children: [
      {
        path: ':accountId/withdrawal',
        component: WithdrawalPageComponent,
        resolve: {
          account: accountResolver,
        }
      },
      {
        path: ':accountId/transfer',
        component: TransferPageComponent,
        resolve: {
          account: accountResolver,
        }
      }
    ]
  }
];
