import { AfterViewInit, Component, inject } from '@angular/core';
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
            state('open',style({
                right:'-300px'
            })),
            state('close',style({
                right:0
            })),
            transition('open => close',[animate('1s')]),
            transition('close => open',[animate('1s')])
        ])
    ],
})

export class HeroComponent implements AfterViewInit{
    service = inject(HeroService);
    ngAfterViewInit(): void {
        this.service.isOpen = true;
    }
}