import { Injectable } from '@angular/core';
import {
  ActionSheetButton,
  ActionSheetController,
  AlertButton,
  AlertController,
} from '@ionic/angular';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  position!: string;
  private header!: string;
  private message!: string;
  private buttons!: AlertButton[];
  private type: string = 'alert';
  private state = new Subject();
  public  state$ = this.state.asObservable();

  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
  ) {}

  setHeader(header: string) {
    this.header = header;
    return this;
  }

  setMessage(message: string) {
    this.message = message;
    return this;
  }

  setType(type: string) {
    this.type = type;
    return this;
  }

  setButtons(buttons: AlertButton[]) {
    this.buttons = buttons;
    return this;
  }

  open() {
    this.buildAlert(this.buttons);
    return this;
  }

  public setState(event ?:any) {
    this.state.next(event);
    console.log(event);
  }

   private async buildAlert(buttons: AlertButton[] | ActionSheetButton[] = []) {

    let actions = buttons;
    let sheet ;

    actions.map((item) => {
      return {
        text: item.text,
        handler: item.handler,
        role: item.role,
      };
    });

    if (this.type == 'alert') {
      sheet = await  this.alertController
        .create({
          header: this.header,
          message: this.message,
          buttons: actions as AlertButton[],
        })
      sheet.present();
      sheet.onclick = (event : any ) => {
        this.setState(event)
      }


    }

    sheet = await this.actionSheetController
      .create({
        buttons: buttons as ActionSheetButton[],
        mode: 'ios',
        header: this.header,
        animated: true,
    })
    sheet.present();
    sheet.onclick = (event : any ) => {
      this.setState(event)
    }
  }
}
