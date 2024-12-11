import { Component } from '@angular/core';
import { Skills } from './about.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills:Skills[] = [
    {
      text:'Angular',
      icon:'bx bxl-angular',
    },
    {
      text:'SCSS',
      icon:'bx bxl-sass',
    },
    {
      text:'Bootstrap',
      icon:'bx bxl-bootstrap',
    },
  ];
}
