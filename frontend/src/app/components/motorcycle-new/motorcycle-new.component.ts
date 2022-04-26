import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../../models/motorcycle';
import { MotorcycleService } from "../../services/motorcycle.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motorcycle-new',
  templateUrl: './motorcycle-new.component.html',
  styleUrls: ['./motorcycle-new.component.css'],
  providers: [MotorcycleService]
})
export class MotorcycleNewComponent implements OnInit {

  public motorcycle: Motorcycle;

  constructor(
    private _motorcycleService: MotorcycleService,
    private _toastr: ToastrService
  ) {
    this.motorcycle = new Motorcycle(1, '', 1, 2, 0, 0, 'instock', 0, 0, 0, 'tax statud', 'tax class');
  }

  ngOnInit(): void {
  }

  on_submit(form:any) {

    this._motorcycleService.add_motorcycle(this.motorcycle).subscribe(
      response => {
        console.log(response);

        this._toastr.success( response["motorcycle"]["model"]+" fue agregada correctamente.", "Motocicleta agregada correctamente!", {
          closeButton: true
        });

        form.reset();

      },
      error => {
        console.log(<any>error);
        this._toastr.error('ERROR: ' + error["message"], 'La motocicleta NO se ha agregado correctamente', {
          // timeOut: 3000,
          closeButton: true,
          // progressBar: true
        });
      }
    );

  }

}
