import { Component } from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface Experiences {
  [key: string]: {
    [key: string]: {
      text: Array<{ text: string }>,
      link?: string;
    }
  }
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  iconCheck = faCheck;

  experiences: Experiences = {
    'group1': {
      'Smarter Data Solutions: Whites Recycling Project': {
        text: [
          { text: 'This was my first project' },
          { text: 'Requirements - bespoke portal to input data' },
          { text: 'Data storage - MySQL and AWS S3 Bucket' },
          { text: 'Frontend - Angular' },
          { text: 'Backend - NestJS' },
          { text: 'The project was deployed to AWS using ECS and Cloud Front/S3' }
        ],
        link: 'https://whitesrecycling.smarterds.com',
      },
      'Smarter Data Solutions: Biffa Waste Collection Portal': {
        text: [
          { text: 'Phase 2 required a mobile app to collect waste data' },
          { text: 'Updated database schema to cope with the new data structure' },
          { text: 'Data storage - MySQL and AWS S3 Bucket' },
          { text: 'App - Ionic' },
          { text: 'Backend - NestJS/GraphQL' },
          { text: 'The project was deployed to Apple App Store and Google Play Store' }
        ],
        link: 'https://biffa.365.smarterds.com',
      },
    },
    'group2': {
      'Smarter Data Solutions: Data Centre Usage Portal': {
        text: [
          { text: 'The project was split into two phases' },
          { text: 'The first phase to collect electrical usage throughout the data centre' },
          { text: 'The requirement was for data to be collected on a 15 minute basis' },
          { text: 'Data collection written in Python then rewritten in GoLang' },
          { text: 'The front end was written in Angular with the backend using many microservices all written in NestJS.' },
          { text: 'The project was deployed to internal data centre vpn' }
        ],
      },
    },
  }

  experienceKeys: string[] = Object.keys(this.experiences);
  getObjectKeys = (data: { [p: string]: { text: Array<{ text: string }>, link?: string } }) => Object.keys(data);


}
