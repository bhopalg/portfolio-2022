import { Component, OnInit } from '@angular/core';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

interface Experience {
  name: string;
  experience: string;
}

interface Experiences {
  [key: string]: Experience[];
}

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent implements OnInit {
  iconCircleCheck = faCircleCheck

  experiences: Experiences = {
    'Frontend Development': [
      {
        name: 'HTML',
        experience: 'Experienced'
      },
      {
        name: 'CSS',
        experience: 'Experienced'
      },
      {
        name: 'JavaScript',
        experience: 'Experienced'
      },
      {
        name: 'Bootstrap',
        experience: 'Experienced'
      },
      {
        name: 'Tailwind',
        experience: 'Experienced'
      },
      {
        name: 'React',
        experience: 'Experienced'
      }
    ],
  }

  experiencesKeys: string[] = Object.keys(this.experiences);


  constructor() { }

  ngOnInit(): void {
  }

}
