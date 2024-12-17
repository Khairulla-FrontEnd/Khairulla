import { Component } from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { DetectDirective } from '../../shared/directives/detect.directive';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    DetectDirective,
    SkeletonModule
  ],
  animations:[
      trigger('visibleInvisible',[
        state('visible',style({ width:'100%' })),
        state('invisible',style({ width:0 })),
        transition('visible => invisible',[animate('1s')]),
        transition('invisible => visible',[animate('1s')])
      ])
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isVisible:boolean = false;
  isLoading:boolean = true;
  Detect(isVisible:boolean):void{
    if(isVisible && !this.isVisible){
      this.isVisible = isVisible;
    }
  }
  handleLoading():void{
    this.isLoading = false;
  }
}
