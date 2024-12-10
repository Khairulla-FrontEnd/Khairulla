import { AfterViewInit, Component, inject } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { NavbarService } from './navbar.service';

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

export class NavbarComponent implements AfterViewInit{  
    service = inject(NavbarService);
    isLoading:boolean = true;
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
    reloadPage():void{
        window.location.reload();
    }
    ngAfterViewInit(): void {
        this.isLoading = false;
    }
    setActive(index:number):void{
        this.active = index;
    }
}