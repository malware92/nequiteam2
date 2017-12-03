import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import{CrearTrucoPage} from '../crear-truco/crear-truco'

/**
 * Generated class for the TrucoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truco',
  templateUrl: 'truco.html',
})
export class TrucoPage {

  public ocultar1: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.ocultar1 = true;
  }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TrucoPage');
  // }
  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  desparacer(){
    this.ocultar1 = !this.ocultar1;
  }
  proponTruco(){
    this.navCtrl.push(CrearTrucoPage);
  }
}
