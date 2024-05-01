import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { InfoComponent } from './pages/info/info.component';
import { SupportComponent } from './pages/support/support.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
