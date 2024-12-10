import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector:'app-hero',
    standalone:true,
    templateUrl:'./hero.component.html',
    styleUrl:'./hero.component.scss',
    imports:[
        NgOptimizedImage
    ],
})

export class HeroComponent{
    
}