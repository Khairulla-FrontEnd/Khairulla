import { Component, inject, OnInit, Output } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'app-navbar',
    standalone:true,
    templateUrl:'./navbar.component.html',
    styleUrl:'./navbar.component.scss',
    imports:[
        NgOptimizedImage,
        ButtonModule,
        SelectButtonModule,
        FormsModule
    ]
})

export class NavbarComponent implements OnInit{
    active:number = 0;
    links:string[] = ['HOME','ABOUT ME','WORK', 'CONTACT'];
    themeOptions:{ label:string,value:string,icon:string }[] = [
        {
            label:'Light',
            value:'light',
            icon:'pi pi-sun',
        },
        {
            label:'Dark',
            value:'dark',
            icon:'pi pi-moon',
        },
    ];
    value:string | null = '';
    ngOnInit(): void {
        this.value = localStorage.getItem('theme');
    }
    changeTheme(theme:string){
        localStorage.setItem('theme',theme);
        window.location.reload();
    }
    reloadPage():void {
        window.location.reload();
    }
    setActive(index:number):void{
        this.active = index;
    }
}