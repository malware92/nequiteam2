import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearTrucoPage } from './crear-truco';

@NgModule({
  declarations: [
    CrearTrucoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearTrucoPage),
  ],
})
export class CrearTrucoPageModule {}
