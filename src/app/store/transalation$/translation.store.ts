import { Injectable } from "@angular/core";


export interface TranslationState {
  lang : string
}

export function createInitialState() : TranslationState {
  return {lang : 'en'};
}

@Injectable({providedIn : 'root'})
export class TransalationStore  {
  constructor(){

  }
}
