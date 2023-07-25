import { Injectable, inject } from '@angular/core';
import { HttpService } from '../api/api.service';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn : 'root'
})
export class AppFunctionService {
  private  readonly api = inject(HttpService);

  getReceiptFile() {
    this.api.setApiType("assets");
    return this.api.getHtml(`statics/receipts/transaction.html`).pipe(shareReplay(1));
  }

  getBanks() {
    this.api.setApiType("assets");
    return this.api.get(`statics/json/banks.json`).pipe(shareReplay(1));
  }


  login(data : any) {
    this.api.setApiType("rest");
    this.api.setEncrypted(true);
    return this.api.post({endpoint : "api/authentication/authenticate", data }).pipe(shareReplay(1));
  }

  register(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "api/Customer/RegisterCustomer",data}).pipe(shareReplay(1));
  }

  addAccount(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "api/add-account",data}).pipe(shareReplay(1));
  }

  getAccounts(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "api/get-account",data});
  }
}
