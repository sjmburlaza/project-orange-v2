import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  translate = inject(TranslateService);

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLanguage() {
    return this.translate.getCurrentLang();
  }
}
