import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastService } from '../services/utils/toast/toast.service';
import { LoadingAppService } from '../services/utils/loading/loading';
import { UtilsFacades } from '../facades/utils.facade';
import { AlertService } from '../services/utils/alert/alert.service';
import { HttpService } from '../services/api/api.service';
import { AppFacade } from '../facades/app.facade';
import { AppFunctionService } from '../services/functions/app.function';
import { SubjectService } from '../services/data/subjects.service';
import { AppServiceFacade } from '../facades/service.facade';
import { InternalizationService } from '../services/internalization/internalization.service';
import { StoreModules } from './store.module';
import { OnBoardResolver } from '../services/resolvers/onboard.resolver';
import { FormBuilderService } from '../services/data/formBuilder.service';
import { ModalService } from '../services/utils/modals/modal.service';
import { EncyptionService } from '../services/data/encryption.service';
import { StorageManagerService } from '../services/storage/storage.manager';
import { UserStorage } from '../services/storage/user.storage';
import { StorageFunctionService } from '../services/functions/storage.function';
import { StoreFacades } from '../facades/store.facade';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [],
  providers: [
    ToastService,
    LoadingAppService,
    UtilsFacades,
    AlertService,
    HttpService,
    AppFacade,
    AppFunctionService,
    SubjectService,
    AppServiceFacade,
    InternalizationService,
    OnBoardResolver,
    FormBuilderService,
    ModalService,
    EncyptionService,
    StorageManagerService,
    UserStorage,
    StorageFunctionService,
    StoreFacades,
    Storage

  ],
  exports: [HttpClientModule,StoreModules],
  imports : [HttpClientModule,StoreModules]
})
export class ServiceModule {}
