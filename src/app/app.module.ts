import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavBarComponent,
    SideBarComponent,
    ProductsListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
