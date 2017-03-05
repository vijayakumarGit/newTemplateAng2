import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CartoonComponent } from './cartoon/cartoon.component';
import { MenuComponent } from './menu/menu.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { SchoolworkComponent } from './schoolwork/schoolwork.component';
import { SnackingComponent } from './snacking/snacking.component';
import { VentureComponent } from './venture/venture.component';

@NgModule({
  declarations: [
    AppComponent,
    CartoonComponent,
    MenuComponent,
    PlaystationComponent,
    SchoolworkComponent,
    SnackingComponent,
    VentureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
