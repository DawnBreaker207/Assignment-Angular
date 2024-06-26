import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './admin.guard';
import { SearchComponent } from './components/search/search.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsAddComponent } from './pages/admin/products-add/products-add.component';
import { ProductsEditComponent } from './pages/admin/products-edit/products-edit.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/details/:id', component: ProductsDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add', component: ProductsAddComponent },
      {
        path: 'edit/:id',
        component: ProductsEditComponent,
      },
      {
        path: 'add-category',
        component: CategoryAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
