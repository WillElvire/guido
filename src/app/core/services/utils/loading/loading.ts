import { LoadingController ,SpinnerTypes} from '@ionic/angular';
import { Injectable, inject } from "@angular/core";

@Injectable()
export class LoadingAppService {

  private loading  = inject(LoadingController);

  public  async startSpinning(message = "Chargement ....." , duration : number = 2000 , spinner  : SpinnerTypes  = 'circular') {
    const spin = await this.loading.create({
      spinner,
      mode: 'ios',
      message,
      duration
    });
    return spin.present();
  }


  public async stopSpinning() {
    return await this.loading.dismiss();
  }
}
