import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { FirstComponent } from './first/first.component';

import { AppComponent } from './app.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTCharacterComponent,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
