import { Component, OnInit } from '@angular/core';
import { DetectDirective } from '../../shared/directives/detect.directive';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperCardComponent } from './components/swiper-card/swiper-card.component';
import { Project } from './projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DetectDirective,
    ButtonModule,
    SwiperCardComponent
  ],
  animations:[
    trigger('visibleInvisible',[
      state('visible',style({ width:'100%' })),
      state('invisible',style({ width:0 })),
      transition('visible => invisible',[animate('2s')]),
      transition('invisible => visible',[animate('2s')])
    ])
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  isVisible:boolean = false;

  projects:Project[] = [
    {
      id:0,
      title:'E-Commerce Store',
      description:'This project, completed over three weeks, features a fully responsive design with product categorization and search functionality. Developed using Angular and third-party libraries, I took the lead on the frontend, while my teammate helped with the initial setup. I also implemented a free backend service to support functionality. This project demonstrates my ability to create dynamic, user-friendly e-commerce platforms.',
      imgUrl:'./assets/projects/project.png',
      github:'https://github.com/Khairulla-FrontEnd/E-Commerce-Angular',
      url:'https://khair-creed.vercel.app',
      frameworks:['Angular','Bootstrap','PrimeNG']
    }
  ]

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      modules:[
        Navigation,
        Pagination
      ],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
      },
      mousewheel: true,
      keyboard: true,
    });
  }
  Detect(isVisible:boolean):void{
    if(isVisible && !this.isVisible){
      this.isVisible = isVisible;
    }
  }
}
