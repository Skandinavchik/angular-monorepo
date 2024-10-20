import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
      ): ApolloClientOptions<unknown> => ({
        link: ApolloLink.from([
          httpLink.create({ uri: 'http://localhost:8000/api/graphql' }),
        ]),
        cache: new InMemoryCache(),
      }),
      deps: [HttpLink],
    },
    Apollo,
  ],
}
