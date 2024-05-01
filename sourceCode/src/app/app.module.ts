import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/core/layout/layout.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { InfoComponent } from './pages/info/info.component';
import { MainComponent } from './pages/main/main.component';
import { ShopsComponent } from './pages/shops/shops.component';
import { SupportComponent } from './pages/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    ProductsComponent,
    InfoComponent,
    MainComponent,
    ShopsComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
      enableTracing: true,
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
