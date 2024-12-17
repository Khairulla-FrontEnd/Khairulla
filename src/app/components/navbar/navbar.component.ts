import { Component, HostListener, OnInit } from "@angular/core";
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
    links:string[] = ['HOME','ABOUT','WORK', 'CONTACT'];
    isScrolled:boolean = false;
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
    @HostListener('window:scroll',['$event'])
    onScroll(event:Event):void{
        if(window.scrollY !== 0){
            this.isScrolled = true;
        }else{
            this.isScrolled = false;
        }
    }
    ngOnInit(): void {
        this.value = localStorage.getItem('theme');
        if(!this.value){
            this.value = 'light';
        }
    }
    changeTheme(theme:string){
        localStorage.setItem('theme',theme);
        window.location.reload();
    }
    setActive(index:number):void{
        this.active = index;
    }
}