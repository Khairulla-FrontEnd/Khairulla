import { Component, OnInit } from '@angular/core';
import { DetectDirective } from '../../shared/directives/detect.directive';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DetectDirective,
    NgOptimizedImage,
    ButtonModule
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
    
    if(window.innerWidth <= 590){
      var swiper = new Swiper(".mySwiper",{
        pagination: {
          el: ".swiper-pagination",
        },
      })
    }else{
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        modules:[
          Navigation,
          Pagination
        ],
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  Detect(isVisible:boolean):void{
    if(isVisible && !this.isVisible){
      this.isVisible = isVisible;
    }
  }
}
