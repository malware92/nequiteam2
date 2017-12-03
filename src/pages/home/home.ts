import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {TrucoPage} from '../truco/truco';
import  {RankingPage} from '../ranking/ranking';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
 trucoPage():void{
   this.navCtrl.push(TrucoPage);
 }
 rankingPage():void{
   this.navCtrl.push(RankingPage);
 }
toastBienvenida(){
  let toast = this.toastCtrl.create({
   message: 'Estas punteando el ranking eres todo un ganador. Sigue asi!',
   duration: 5000,
   position: 'top'
 });

 toast.present();
}


}
