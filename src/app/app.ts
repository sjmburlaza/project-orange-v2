import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  translate = inject(TranslateService);

  ngOnInit() {
    this.router.events.subscribe(() => {
      const lang = this.route.firstChild?.snapshot.paramMap.get('lang');
      if (lang) {
        this.translate.use(lang);
      }
    });
  }
}
