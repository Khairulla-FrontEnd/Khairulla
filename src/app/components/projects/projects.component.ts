import { Component } from '@angular/core';
import { DetectDirective } from '../../shared/directives/detect.directive';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DetectDirective,
    NgOptimizedImage,
    ButtonModule
  ],
  animations:[
    trigger('visibleInvisible',[
      state('visible',style({ width:'100%' })),
      state('invisible',style({ width:0 })),
      transition('visible => invisible',[animate('1s')]),
      transition('invisible => visible',[animate('1s')])
    ])
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent{
  isVisible:boolean = false;
  Detect(isVisible:boolean):void{
    if(isVisible && !this.isVisible){
      this.isVisible = isVisible;
    }
  }
}
