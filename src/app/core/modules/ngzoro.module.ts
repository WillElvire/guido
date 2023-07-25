
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgModule } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ngzoroExport } from './export/ngzoro.export';

@NgModule({
  declarations: [],
  imports: [ngzoroExport],
  exports: [ngzoroExport],
  providers: [NzModalService, NzMessageService, NzNotificationService],
})
export class NgZoroModule {}
