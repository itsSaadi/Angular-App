import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/Product-List/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeCompComponent } from './Components/home-comp/home-comp.component';
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  {path:'welcome',component:HomeCompComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
