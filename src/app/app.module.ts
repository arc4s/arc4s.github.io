import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LanguageTreeComponent } from './language-tree/language-tree.component';



@NgModule({
  declarations: [
    AppComponent,
    LanguageTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
