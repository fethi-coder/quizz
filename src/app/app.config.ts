import { ApplicationConfig } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';

export const appConfig: ApplicationConfig = {
  providers: [provideNoopAnimations(), NgxElectronModule]
};
