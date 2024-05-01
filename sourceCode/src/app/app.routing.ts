import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/core/layout/layout.component';
import { MainComponent } from './pages/main/main.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { InfoComponent } from './pages/info/info.component';
import { SupportComponent } from './pages/support/support.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'prefix' },
      {
        path: 'main',
        component: MainComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'shops',
        component: ShopsComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'info',
        component: InfoComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'support',
        component: SupportComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'prefix',
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'main' },
    ],
  },
];
