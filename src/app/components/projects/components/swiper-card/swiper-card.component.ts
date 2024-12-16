import { Component, Input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { DetectDirective } from "../../../../shared/directives/detect.directive";
import {
    trigger,
    style,
    state,
    transition,
    animate,
  } from '@angular/animations';

@Component({
    selector:'app-swiper-card',
    standalone:true,
    imports:[
        NgOptimizedImage,
        DetectDirective
    ],
    animations:[
        trigger('visibleInvisible',[
              state('visible',style({ width:'100%' })),
              state('invisible',style({ width:0 })),
              transition('visible => invisible',[animate('1s')]),
              transition('invisible => visible',[animate('1s')])
            ])
    ],
    templateUrl:'./swiper-card.component.html',
    styleUrl:'./swiper-card.component.scss',
})

export class SwiperCardComponent {
    @Input() imgUrl:string = '';
    @Input() title:string = '';
    @Input() text:string = '';
    @Input() smallText:string = '';
    isVisible:boolean = false;
    Detect(isVisible:boolean):void{
        if(isVisible && !this.isVisible){
            this.isVisible = isVisible;
        }
    }
}