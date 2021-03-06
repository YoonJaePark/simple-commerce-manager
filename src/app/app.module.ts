import { AppRoutingModule } from './app-routing.module';
import { ScmMainModule } from './scm-main/scm-main.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* App Modules */
    ScmMainModule, ProductModule, CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
