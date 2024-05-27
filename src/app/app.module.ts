import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleBannerComponent } from './components/sale-banner/sale-banner.component';
import { PopularProductComponent } from './components/popular-product/popular-product.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsAllComponent } from './components/products-all/products-all.component';
import { RelatedProductComponent } from './components/related-product/related-product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { CartsComponent } from './components/carts/carts.component';
import { QuantityComponent } from './components/quantity/quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductsDetailComponent,
    CartComponent,
    SaleBannerComponent,
    PopularProductComponent,
    HeroSectionComponent,
    ProductsAllComponent,
    RelatedProductComponent,
    ProductsDetailsComponent,
    ProductsCardsComponent,
    BreadcrumsComponent,
    LatestNewsComponent,
    CartsComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
