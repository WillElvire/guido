import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFunctionService } from '../services/functions/app.function';
const shajs = require('sha.js')

@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  private appFunction = inject(AppFunctionService);


  getReceiptFile() {
   return this.appFunction.getReceiptFile();
  }

  getBanks() {
    return this.appFunction.getBanks();
  }

  login(data:any) {
   // data.password =  shajs('sha256').update(data.password).digest('hex');
    return this.appFunction.login(data);
  }

  register(data :any) {
    return this.appFunction.register(data);
  }

  addAccount(data : any) {
    return this.appFunction.addAccount(data);
  }

  getAccounts(data: any){
    return this.appFunction.getAccounts(data);
  }
}
