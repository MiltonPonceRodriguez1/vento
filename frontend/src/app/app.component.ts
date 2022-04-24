import { Component } from '@angular/core';
import { faMotorcycle, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vento Motorcycles';
  faUserLock = faUserLock;
  faMotorcycle = faMotorcycle;
}
