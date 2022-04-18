import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from 'src/app/app.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { ExperiencesComponent } from 'src/app/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperiencesComponent,
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
