import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/Product-List/product-list/product-list.component';
import { StarCompComponent } from './Shared/star-comp/star-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateTextPipe } from './Shared/star-comp/minimze-length';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeCompComponent } from './Components/home-comp/home-comp.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, StarCompComponent,TruncateTextPipe, ProductDetailsComponent, NotFoundComponent, NavbarComponent, HomeCompComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
