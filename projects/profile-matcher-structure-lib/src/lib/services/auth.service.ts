import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileMatcherRootService} from './profile-matcher-root.service';
import {AuthService as AuthenticationService} from 'authorization-services-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: ProfileMatcherRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }

}
