import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from 'src/app/app.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MyExperienceComponent } from 'src/app/my-experience/my-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent,
    MyExperienceComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
