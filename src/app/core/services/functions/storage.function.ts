import { UserStateDto } from './../../../store/user$/user.state';
import { UserStorage } from './../storage/user.storage';
import { UserStore } from './../../../store/user$/user.store';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class StorageFunctionService {

  private readonly userStore    = inject(UserStore);
  public readonly  userStorage  = inject(UserStorage);


  get user() {
    return this.userStore.state$;
  }

  dispatch(userState : UserStateDto) {
    this.userStore.addUser(userState);
    this.userStorage.addUser(userState);
  }

  removeUser() {
    this.userStore.removeUser();
    this.userStorage.removeUser();
  }

  persistUserId(id : string) {
    this.userStorage.addId(id);
  }

}
