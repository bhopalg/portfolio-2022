import { Component, OnInit } from '@angular/core';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

interface Skill {
  name: string;
  skill: string;
}

interface Skills {
  [key: string]: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  iconCircleCheck = faCircleCheck

  skills: Skills = {
    'Frontend Development': [
      {
        name: 'HTML',
        skill: 'Experienced'
      },
      {
        name: 'CSS',
        skill: 'Experienced'
      },
      {
        name: 'JavaScript',
        skill: 'Experienced'
      },
      {
        name: 'Bootstrap',
        skill: 'Experienced'
      },
      {
        name: 'Tailwind',
        skill: 'Experienced'
      },
      {
        name: 'React',
        skill: 'Experienced'
      }
    ],
    'Backend Development': [
      {
        name: 'NodeJS',
        skill: 'Experienced'
      },
      {
        name: 'MongoDB',
        skill: 'Experienced'
      },
      {
        name: 'PHP',
        skill: 'Experienced'
      },
      {
        name: 'MySQL',
        skill: 'Experienced'
      },
      {
        name: 'Python',
        skill: 'Experienced'
      }
    ],
  }

  skillKeys: string[] = Object.keys(this.skills);


  constructor() { }

  ngOnInit(): void {
  }

}
