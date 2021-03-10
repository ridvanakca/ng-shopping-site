import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', component: ProductListComponent },
  { path: 'home', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'home/:categoryName', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
