import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from 'src/app/app.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
