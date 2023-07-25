import { UserState } from './../../../store/user$/user.state';
import { UserDto } from './../../interfaces/dto';
import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage.manager';
@Injectable({
  providedIn : 'root'
})
export class UserStorage {

  private user !: Partial<UserDto> | null | any ;
  private key   : string = "qlips_user";
  private token !: string | any ;
  private id    !: string | any;

  constructor(private storage : StorageManagerService) {
    const [user,token,id] =  [this.storage.get(this.key),this.storage.get("token"),this.storage.get("qlips_user_id")];
    this.user = user;
    this.token = token;
    this.id = id;
  }

  get User(){
   return  this.user;
  }

  get UserId() {
    return  this.id;
  }

  get isLoggedIn(){
    return !!this.user;
  }

  get Token() {
    return this.token;
  }

  addUser(user : UserState) {
    this.storage.set(this.key, user.user);
    this.storage.set("token",user.token);
  }

async removeUser(){
    await this.storage.remove(this.key);
    await this.storage.remove("token");
  }

  addId(id : string) {
    this.storage.set("qlips_user_id",id)
  }

}
