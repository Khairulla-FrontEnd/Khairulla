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
      transition('visible => invisible',[animate('1s')]),
      transition('invisible => visible',[animate('1s')])
    ])
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  isVisible:boolean = false;
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
        clickable:true
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
