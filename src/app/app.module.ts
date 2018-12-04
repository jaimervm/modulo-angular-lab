import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserModule} from './user/user.module';
import {DocumentModule} from './document/document.module';
import {ParametModule} from './paramet/paramet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    DocumentModule,
    ParametModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
