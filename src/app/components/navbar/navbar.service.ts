import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root' })

export class NavbarService{
    value:string = 'light';
    changeTheme(theme:string){
        document.querySelector('html')?.setAttribute('data-bs-theme',theme);
    }
}