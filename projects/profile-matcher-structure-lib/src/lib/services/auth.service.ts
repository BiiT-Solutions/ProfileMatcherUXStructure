import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileMatcherStructureRootService} from './profile-matcher-structure-root.service';
import {AuthService as AuthenticationService} from 'authorization-services-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: ProfileMatcherStructureRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }

}
