import { LoadingAppService } from '../services/utils/loading/loading';
import { AlertService } from '../services/utils/alert/alert.service';
import { ToastService } from './../services/utils/toast/toast.service';
import { Injectable, inject } from '@angular/core';
import { ModalService } from '../services/utils/modals/modal.service';


@Injectable({
  providedIn : 'root'
})
export class UtilsFacades {

  public readonly toastService   = inject(ToastService);
  public readonly loadingService = inject(LoadingAppService);
  public readonly alertService   = inject(AlertService);
  public readonly modalService   = inject(ModalService);

  errorToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildDanger();
  }

  successToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildSuccess();
  }
}
