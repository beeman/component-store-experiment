import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreV10Component } from './store-v10.component';
import { StoreV11Component } from './store-v11.component';

@NgModule({
  declarations: [AppComponent, StoreV10Component, StoreV11Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
