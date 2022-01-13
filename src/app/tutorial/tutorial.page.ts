import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(
    public modal: ModalController 
  ) { }

  ngOnInit() {
  }


  close(){
    this.modal.dismiss();
  }
}
