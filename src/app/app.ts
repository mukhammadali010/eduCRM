import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'EduCRM Application';
}
