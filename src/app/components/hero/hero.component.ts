import { AfterViewInit, Component, inject, NgZone } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeroService } from './hero.service';

@Component({
    selector:'app-hero',
    standalone:true,
    templateUrl:'./hero.component.html',
    styleUrl:'./hero.component.scss',
    imports:[
        NgOptimizedImage
    ],
    animations:[
        trigger('openClose',[
            state('open',style({
                width:new HeroService().width
            })),
            state('close',style({
                width:0
            })),
            transition('open => close',[animate('1s')]),
            transition('close => open',[animate('1s')])
        ]),
        trigger('moveStop',[
            state('close',style({
                height:new HeroService().height
            })),
            state('open',style({
                height:0
            })),
            transition('open => close',[animate('1s')]),
            transition('close => open',[animate('1s')])
        ])
    ],
})

export class HeroComponent implements AfterViewInit{
    service = inject(HeroService);
    ngZone = inject(NgZone);
    ngAfterViewInit(): void {
        setTimeout(() => {
            if(window.innerWidth > 768){
                this.service.height = '365px'
            }
            this.service.isOpen = true;
        })
    }
}