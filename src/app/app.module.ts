import { CategoryComponent } from './components/category/category.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';
import { CheckoutTotalComponent } from './components/checkout-total/checkout-total.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    CheckoutComponent,
    CheckoutProductsComponent,
    CheckoutTotalComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
