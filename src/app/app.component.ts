import { Component } from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import { FooterComponent } from '../pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telenity-website-project';
  constructor(){
    console.log('application loading');
    
  }
}
