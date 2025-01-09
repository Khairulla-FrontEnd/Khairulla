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
import { ButtonModule } from "primeng/button";

@Component({
    selector:'app-swiper-card',
    standalone:true,
    imports:[
        NgOptimizedImage,
        DetectDirective,
        ButtonModule,
    ],
    animations:[
        trigger('visibleInvisible',[
              state('visible',style({ width:'100%' })),
              state('invisible',style({ width:0 })),
              transition('visible => invisible',[animate('2s')]),
              transition('invisible => visible',[animate('2s')])
            ])
    ],
    templateUrl:'./swiper-card.component.html',
    styleUrl:'./swiper-card.component.scss',
})

export class SwiperCardComponent {
    @Input() imgUrl:string = '';
    @Input() title:string = '';
    @Input() text:string = '';
    @Input() frameworks:string[] = [];
    @Input() url:string = '';
    @Input() github:string = '';
    isVisible:boolean = false;
    Detect(isVisible:boolean):void{
        if(isVisible && !this.isVisible){
            this.isVisible = isVisible;
        }
    }
}