import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/admin/list-products/list-products.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';
import { CartsComponent } from './components/carts/carts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { PopularProductComponent } from './components/popular-product/popular-product.component';
import { ProductsAllComponent } from './components/products-all/products-all.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { RelatedProductComponent } from './components/related-product/related-product.component';
import { SaleBannerComponent } from './components/sale-banner/sale-banner.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsAddComponent } from './pages/admin/products-add/products-add.component';
import { ProductsEditComponent } from './pages/admin/products-edit/products-edit.component';
import { ActivatedRoute } from '@angular/router';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';

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
    QuantityComponent,
    ListProductsComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    CategoryAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
