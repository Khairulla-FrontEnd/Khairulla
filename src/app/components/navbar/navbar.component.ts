import { AfterViewInit, Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@Component({
    selector:'app-navbar',
    standalone:true,
    templateUrl:'./navbar.component.html',
    styleUrl:'./navbar.component.scss',
    imports:[
        NgOptimizedImage,
        SkeletonModule,
        ButtonModule
    ]
})

export class NavbarComponent implements AfterViewInit{  
    isLoading:boolean = true;
    active:number = 0;
    links:string[] = ['HOME','ABOUT ME','WORK', 'CONTACT']
    reloadPage():void{
        window.location.reload();
    }
    ngAfterViewInit(): void {
        this.isLoading = false;
    }
}