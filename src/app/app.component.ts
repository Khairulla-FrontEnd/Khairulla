import { Component, inject } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NavbarService } from './components/navbar/navbar.service';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  navbarService = inject(NavbarService);
}
