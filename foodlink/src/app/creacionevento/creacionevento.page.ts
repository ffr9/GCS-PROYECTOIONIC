import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacionevento',
  templateUrl: './creacionevento.page.html',
  styleUrls: ['./creacionevento.page.scss'],
})
export class CreacioneventoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Función para abrir el calendario
  openCalendar(type: string) {
    console.log('Abriendo calendario para:', type);
    // Aquí puedes agregar la lógica para abrir el calendario según el tipo de fecha (inicio o fin)
  }

}
