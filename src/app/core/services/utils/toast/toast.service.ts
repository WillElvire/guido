import Swal from 'sweetalert2';
import { ToastType } from './../../../type/toast.element';
import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
  private message: string = '';
  private alertType?: string;
  private autoClose: boolean = true;
  private duration: number = 3000;
  private position : string = "top";

  private readonly loading = inject(LoadingController);
  private readonly toast   = inject(ToastController);

  private setAutoClose(autoClose: boolean) {
    this.autoClose = autoClose;
  }

  public setPosition(top : string) {
    this.position  = top;
    return this;
  }

  public setMessage(message: string) {
    this.message = message;
    return this;
  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  private setAlertType(alertType: ToastType) {
    this.alertType = alertType;
    return this;
  }

  buildSuccess() {
    this.setAlertType(ToastType.SUCCESS);
    this.setAutoClose(true);
    return this.build();
  }

  buildDanger() {
    this.setAlertType(ToastType.DANGER);
    this.setAutoClose(true);
    return this.build();
  }

  buildWarning() {
    this.setAlertType(ToastType.WARNING);
    this.setAutoClose(true);
    return this.build();
  }

  private buildOld() {
    let swalConfiguration: any = {
      showCloseButton: true,
      showCancelButton: false,
      toast: true,
      focusConfirm: true,
      position: this.position,
      showConfirmButton: false,
      timer: this.duration,
      timerProgressBar: true,
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    };

    swalConfiguration['text'] = this.message;
    swalConfiguration['icon'] = this.alertType;
    Swal.fire(swalConfiguration);
  }


  private async build()  {
    let toast = await this.toast.create({
      message : this.message,
      duration : this.duration,
      position : "top",
      color :  this.alertType,
      icon  : "close-outline",
      cssClass: "custom-toast"
    })
    return toast.present();
  }


}
