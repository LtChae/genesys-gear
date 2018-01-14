import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeaponComponent } from './weapon/weapon.component';
import { ArmoryComponent } from './armory/armory.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    ArmoryComponent
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
