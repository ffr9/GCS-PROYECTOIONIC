import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-creacionevento',
  templateUrl: './creacionevento.page.html',
  styleUrls: ['./creacionevento.page.scss'],
})
export class CreacioneventoPage implements OnInit {
  startDate: string = ''; // Inicializando la propiedad
  endDate: string = ''; // Inicializando la propiedad

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async openCalendar(type: string) {
    const alert = await this.alertController.create({
      header: type === 'start' ? 'Selecciona fecha de inicio' : 'Selecciona fecha de fin',
      inputs: [
        {
          name: 'date',
          type: 'date',
          value: new Date().toISOString().split('T')[0]
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if (type === 'start') {
              this.startDate = data.date;
            } else {
              this.endDate = data.date;
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
