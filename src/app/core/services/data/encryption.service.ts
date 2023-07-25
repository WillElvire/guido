import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncyptionService {

  private key: any = '7E8Tl019ajjWgloFZOzeUhS1Ww+Rq/uvcS2NNRoFeS0=';
  private iv: any = 'mHXz/yazMpBcaKPFYwzPMQ==';

  constructor() {}

  
  /*encrypt(dataToBeEncrypted: any) {
    return aes.encrypt(dataToBeEncrypted, this.key, {
      name: 'AES-GCM',
      iv: this.iv,
      tagLength: 16,
    });
    return "ksjdjdjdjdjjd";
  }*/

  encrypt(dataToBeEncrypted: any) {
    const keyBytes = CryptoJS.enc.Utf8.parse(this.key);
    const ivBytes = CryptoJS.enc.Utf8.parse(this.iv);
  
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(dataToBeEncrypted), keyBytes, {
      iv: ivBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.NoPadding,
      blockSize: 128,
      keySize: 256 
    });
    
    return encrypted.toString();
  }
}
