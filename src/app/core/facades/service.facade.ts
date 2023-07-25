import { Injectable,inject } from "@angular/core";
import { SubjectService } from "../services/data/subjects.service";
import { InternalizationService } from "../services/internalization/internalization.service";
import { FormBuilderService } from "../services/data/formBuilder.service";
import { formInput, modalComponent } from "../type/system.type";
import { ModalService } from "../services/utils/modals/modal.service";

@Injectable({
  providedIn : 'root'
})
export class AppServiceFacade {

  /************************  VARIABLE DECLARATION  ******************/
    public  readonly subjectService         = inject(SubjectService);
    public  readonly internalizationService = inject(InternalizationService);
    private readonly formBuilderService     = inject(FormBuilderService);
    private readonly modalsService          = inject(ModalService);
  /************************  VARIABLE DECLARATION  ******************/
  getLang() {
    return this.internalizationService.getLang();
  }

  buildForm(formField : {} | [] ,inputType ?: formInput) {
    return this.formBuilderService.setForm(formField).setInputType(inputType as formInput).build();
  }

  show(component : modalComponent) {
    this.modalsService.setComponent(component).show();
  }
}
