import { UserStateDto } from './../../store/user$/user.state';
import { Injectable, inject } from '@angular/core';
import { StorageFunctionService } from '../services/functions/storage.function';
@Injectable({
  providedIn : 'root'
})
export class StoreFacades {

  public storeFunction = inject(StorageFunctionService);

  dispatch(user : UserStateDto){
    this.storeFunction.dispatch(user);
  }

  removeUser(){
    this.storeFunction.removeUser();
  }

   user$() {
    return  this.storeFunction.user;
  }

  storeUserId() {

  }
}
