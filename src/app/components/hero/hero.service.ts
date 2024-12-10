import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root' })

export class HeroService{
    isOpen:boolean = false;
    width:string = '100%';
    height:string = '426px';
}