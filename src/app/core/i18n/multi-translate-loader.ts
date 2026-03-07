import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin, map, Observable } from 'rxjs';

export class MultiTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private resources: string[],
  ) {}

  getTranslation(lang: string): Observable<any> {
    const requests = this.resources.map((res) =>
      this.http.get(`/assets/i18n/${lang}/${res}.json`),
    );

    return forkJoin(requests).pipe(
      map((response) => Object.assign({}, ...response)),
    );
  }
}
