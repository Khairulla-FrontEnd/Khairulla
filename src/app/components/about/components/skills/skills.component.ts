import { Component, Input } from "@angular/core";
import { Skills } from "../../about.interface";
import { DetectDirective } from "../../../../shared/directives/detect.directive";
import {
    trigger,
    style,
    state,
    transition,
    animate,
  } from '@angular/animations';  

@Component({
    selector:'app-skills',
    standalone:true,
    imports:[
        DetectDirective
    ],
    animations:[
        trigger('visibleInvisible',[
              state('visible',style({ width:'100%' })),
              state('invisible',style({ width:0 })),
              transition('visible => invisible',[animate('2s')]),
              transition('invisible => visible',[animate('2s')])
            ])
    ],
    templateUrl:'./skills.component.html',
    styleUrl:'./skills.component.scss'
})

export class SkillsComponent {
    @Input() skills:Skills[] = [];

    isVisible:boolean = false;
    Detect(isVisible:boolean) {
        if(isVisible && !this.isVisible){
            this.isVisible = isVisible;
        }
    }
}