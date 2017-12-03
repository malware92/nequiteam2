import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage}from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the CrearTrucoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-truco',
  templateUrl: 'crear-truco.html',
})
export class CrearTrucoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearTrucoPage');
  }
  volverInicio(){
    let toast = this.toastCtrl.create({
     message: 'Se envio la propuesta correctamente, a la espera de aprobacion.',
     duration: 3000,
     position: 'top'

   });
   toast.present();
    this.navCtrl.push(HomePage);
  }
}
