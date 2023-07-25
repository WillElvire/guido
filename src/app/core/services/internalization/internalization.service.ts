import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Lang } from "../../type/lang.type";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@Injectable({
  providedIn : 'root'
})
export class InternalizationService {

  private browserLang = this.translate.getBrowserLang();

  constructor(public translate: TranslateService,public httpClient : HttpClient) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    this.createTranslateLoader(httpClient);
    //translate.use(this.browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  getDefaultLanguage() {
    return this.translate.defaultLang;
  }
  getLanguages() {
   return this.translate.getLangs();
  }

  getLang() {
    return this.translate.currentLang;
  }

  setLang(lang : Lang) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
  }

  createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
}
