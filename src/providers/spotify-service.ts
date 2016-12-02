import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { APP_CONFIG, IAppConfig } from './../app/app-config';
import { LoggerService } from './logger-service'

import { SpotifyUserProfile } from '../models'

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
    return this.get(`/me`)
      .map((r) => r.json() as SpotifyUserProfile);
  }

  get authHeader(): Headers {
    let authHeader = new Headers();
    authHeader.append('Authorization', `Bearer ${this.getAuthToken()}`);
    return authHeader;
  }

  private get(endpoint: string): Observable<Response> {
    return this.http.get(`${API_BASE_URI}${endpoint}`, {
      headers: this.authHeader
    })
    .do((r) => this.logger.log.debug(`Response from ${API_BASE_URI}${endpoint}: ${JSON.stringify(r.json())}`))
    .catch((err) => Observable.throw(err));
  }

  private post(endpoint: string, payload: any): Observable<Response> {
    return this.http.post(`${API_BASE_URI}${endpoint}`, payload, {
      headers: this.authHeader
    })
    .do((r) => this.logger.log.debug(`Response from ${API_BASE_URI}${endpoint}: ${JSON.stringify(r.json())}`))
    .catch((err) => Observable.throw(err));
  }

  public saveAuthToken(token: string) {
    this.logger.log.debug(`Saving auth token ${token}`);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getAuthToken(): string {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  public removeAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  get isLoggedIn(): boolean {
    return this.getAuthToken() !== '';
  }
}
