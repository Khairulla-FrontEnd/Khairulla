import { Component } from '@angular/core';
import { Skills } from './about.interface';
import { DetectDirective } from '../../shared/directives/detect.directive';
import { SkillsComponent } from "./components/skills/skills.component";
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    DetectDirective,
    SkillsComponent
],
  animations:[
    trigger('visibleInvisible',[
      state('visible',style({ width:'100%' })),
      state('invisible',style({ width:0 })),
      transition('visible => invisible',[animate('1s')]),
      transition('invisible => visible',[animate('1s')])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isVisible:boolean = false;
  skills:Skills[] = [
    {
      text:'Angular',
      icon:'bx bxl-angular',
      link:'https://angular.dev',
    },
    {
      text:'SCSS',
      icon:'bx bxl-sass',
      link:'https://sass-lang.com',
    },
    {
      text:'Bootstrap',
      icon:'bx bxl-bootstrap',
      link:'https://getbootstrap.com',
    },
  ];
  Detect(isVisible:boolean):void {
    if(isVisible && !this.isVisible){
      this.isVisible = true;
    }
  }
}