import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstContentComponent } from './first-content/first-content.component';
import { SecondContentComponent } from './second-content/second-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstContentComponent,
    SecondContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'social-server'}),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
