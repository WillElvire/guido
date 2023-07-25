import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn : 'root'
})
export class StorageManagerService {

  constructor(public storage : Storage){
    this.storage.create();
  }
  public set(key  : any ,value : any){
    return this.storage.set(key,value);
  }
  public async get(key : any ){
    return await this.storage.get(key);
  }
  public async remove(key : any ){
    return await this.storage.remove(key);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
