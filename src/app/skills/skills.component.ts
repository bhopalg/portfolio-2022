import { Component, OnInit } from '@angular/core';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  skill: 'Experienced' | 'Intermediate' | 'Beginner';
}

interface Skills {
  [key: string]: {
    [key: string]: Skill[];
  };
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  iconCircleCheck = faCircleCheck

  skills: Skills = {
    'group1': {
      'Frontend Development': [
        {
          name: 'Angular',
          skill: 'Experienced',
        },
        {
          name: 'JavaScript/Typescript',
          skill: 'Experienced',
        },
        {
          name: 'Ionic',
          skill: 'Intermediate',
        },
        {
          name: 'React',
          skill: 'Intermediate',
        },
        {
          name: 'C#',
          skill: 'Intermediate',
        },
      ],
      'Backend Development': [
        {
          name: 'NodeJS',
          skill: 'Experienced',
        },
        {
          name: 'MySQL',
          skill: 'Experienced',
        },
        {
          name: 'GraphQL',
          skill: 'Experienced',
        },
        {
          name: 'Solidity',
          skill: 'Beginner',
        },
        {
          name: 'GoLang',
          skill: 'Intermediate',
        },
        {
          name: 'Python',
          skill: 'Intermediate',
        },
      ],
    },
    'group2': {
      'Dev Ops': [
        {
          name: 'Docker',
          skill: 'Experienced'
        },
        {
          name: 'Elastic Container Service',
          skill: 'Experienced',
        },
        {
          name: 'Kubernetes',
          skill: 'Beginner',
        },
        {
          name: 'Ethereum Main Net',
          skill: 'Beginner'
        },
        {
          name: 'Apple App Store/Google Play Store',
          skill: 'Intermediate',
        },
        {
          name: 'Terraform',
          skill: 'Beginner',
        }
      ],
    },
  }

  skillKeys: string[] = Object.keys(this.skills);

  constructor() { }

  ngOnInit(): void {
  }

  getObjectKeys = (data: { [p: string]: Skill[] }) => Object.keys(data);

}
