import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MockAuthInterceptor } from 'src/app/core/interceptors/mock-auth.interceptor';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { environment } from 'src/environments/environment';
import { CheckoutConfigService } from 'src/app/features/checkout/checkout-config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    ...(environment.useMockAuth
      ? [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: MockAuthInterceptor,
            multi: true,
          },
        ]
      : []),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    CheckoutConfigService,
    provideAppInitializer(() => {
      const configService = inject(CheckoutConfigService);
      return configService.loadCheckoutConfig();
    }),
  ],
};
