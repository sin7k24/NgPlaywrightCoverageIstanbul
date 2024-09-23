import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/* istanbul ignore next */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
