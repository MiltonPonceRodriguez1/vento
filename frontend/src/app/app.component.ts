import { Component } from '@angular/core';
import { faMotorcycle, faUserLock, faPlusCircle, faBorderAll, faGaugeHigh, faEdit, faTrash, faTags } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vento Motorcycles';
  faUserLock = faUserLock;
  faMotorcycle = faMotorcycle;
  faPlusCircle = faPlusCircle;
  faBorderAll = faBorderAll;
  faGaugeHigh = faGaugeHigh;
  faEdit = faEdit;
  faTrash = faTrash;
  faTags = faTags;
}
