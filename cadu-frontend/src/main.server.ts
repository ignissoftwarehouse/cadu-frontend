import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/container/app.component';
import { config } from './app/container/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
