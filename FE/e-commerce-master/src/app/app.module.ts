import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { SsdComponent } from './features/home/pages/ssd/ssd.component';
import { TorreComponent } from './features/home/pages/torre/torre.component';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPageSSDComponent } from './features/home/pages/productPageSSD/productPageSSD.component';
import { ProductPageTorreComponent } from './features/home/pages/productPageTorre/productPageTorre.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageGpuComponent,
    SsdComponent,
    ProductPageSSDComponent,
    TorreComponent,
    ProductPageTorreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
