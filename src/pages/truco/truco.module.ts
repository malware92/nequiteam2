import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrucoPage } from './truco';

@NgModule({
  declarations: [
    TrucoPage,
  ],
  imports: [
    IonicPageModule.forChild(TrucoPage),
  ],
})
export class TrucoPageModule {}
