import { APP_CONFIG, IAppConfig } from '../app/app-config';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { Logger } from "angular2-logger/core";

@Injectable()
export class LoggerService {

  public log: Logger;

  constructor(public logger: Logger, @Inject(APP_CONFIG) private config: IAppConfig) {
    this.log = this.logger;
    // Set the log level using the config value
    switch (config.logLevel) {
      case "OFF":
        this.log.level = this.logger.Level.OFF;
        break;
      case "ERROR":
        this.log.level = this.logger.Level.ERROR;
        break;
      case "WARN":
        this.log.level = this.logger.Level.WARN;
        break;
      case "INFO":
        this.log.level = this.logger.Level.INFO;
        break;
      case "DEBUG":
        this.log.level = this.logger.Level.DEBUG;
        break;
      default:
        this.log.level = this.logger.Level.LOG;
    }
    console.log(`Log level is ${config.logLevel}.`);
  }
}
