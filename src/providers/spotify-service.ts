import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { APP_CONFIG, IAppConfig } from './../app/app-config';
import { LoggerService } from './logger-service'

import { SpotifyUserProfile } from './spotify-entities'

const AUTH_TOKEN_KEY: string = 'SPOTIFY_AUTH_TOKEN';
const API_BASE_URI: string = 'https://api.spotify.com/v1';

@Injectable()
export class SpotifyService {

  constructor(
    public http: Http,
    private logger: LoggerService,
    @Inject(APP_CONFIG) private config: IAppConfig) {
      this.logger.log.debug('SpotifyService ctor');
  }

  public me(): Observable<SpotifyUserProfile> {
    return this.http.get(`${API_BASE_URI}/me`, {
      headers: this.authHeader
    })
    .do((r) => console.log(r))
    .map((r) => r.json() as SpotifyUserProfile);
  }

  get authHeader(): Headers {
    let authHeader = new Headers();
    authHeader.append('Authorization', `Bearer ${this.getAuthToken()}`);
    return authHeader;
  }

  public saveAuthToken(token: string) {
    this.logger.log.debug('Saving auth token');
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getAuthToken(): string {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  public removeAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
