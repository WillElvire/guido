import { Injectable, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Subject } from "rxjs";
import { modalComponent } from "src/app/core/type/system.type";

@Injectable({
  providedIn : 'root'
})
export class ModalService {

  /************************************************************ */
  public readonly modalController = inject(ModalController);
  private modalInformation        = new Subject<any>();
  modalInformation$               = this.modalInformation.asObservable();
  private component !: modalComponent;
  /************************************************************ */

  setComponent(component : modalComponent ) {
    this.component = component ;
    return this;
  }


  private async create(component : modalComponent) {
   const modal  = await this.modalController.create({
    component
   })
   return modal.present();
  }

  show(){
    return this.create(this.component);
  }

  dismiss(value : string) {
    this.modalInformation.next(value)
    return this.modalController.dismiss();
  }
}
