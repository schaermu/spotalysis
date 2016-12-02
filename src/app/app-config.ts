import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
  appName: string;
  clientId: string;
  logLevel: string;
}

export const AppConfig: IAppConfig = {
  appName: 'spotalysis',
  clientId: 'fbd3d8de3c234e7a8ed88efc79281c47',
  logLevel: 'DEBUG'
};
