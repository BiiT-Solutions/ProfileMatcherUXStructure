import {Injectable} from '@angular/core';
import {ProfileMatcherRootService} from "./profile-matcher-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../models/profile";
import {User} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private static readonly ROOT_PATH: string = '/profiles'

  constructor(private rootService: ProfileMatcherRootService, private httpClient: HttpClient) {
  }

  getAll(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}`);
  }

  update(profile: Profile): Observable<Profile> {
    return this.httpClient.put<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}`, profile);
  }

  create(profile: Profile): Observable<Profile> {
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}`, profile);
  }

  getById(id: number): Observable<Profile> {
    return this.httpClient.get<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${id}`);
  }

  getByProjectId(projectId: number): Observable<Profile> {
    return this.httpClient.get<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/projects/${projectId}`);
  }

  getByUserUUID(uuid: string): Observable<Profile> {
    return this.httpClient.get<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/users/${uuid}`);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${id}`);
  }

  geCandidatesById(id: number): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${id}/candidates`);
  }

  assignCandidates(profileId: number, users: User[]): Observable<Profile> {
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}`, users);
  }

  assignCandidatesByUUID(profileId: number, uuids: string[]): Observable<Profile> {
    let httpParams: HttpParams = new HttpParams();
    uuids.forEach(uuid => {
      httpParams = httpParams.append('userUUID', uuid)
    });
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}/candidates`, uuids);
  }

  unassignCandidates(profileId: number, users: User[]): Observable<Profile> {
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}/candidates/remove`, users);
  }

  unassignCandidatesByUUID(profileId: number, uuids: string[]): Observable<Profile> {
    let httpParams: HttpParams = new HttpParams();
    uuids.forEach(uuid => {
      httpParams = httpParams.append('userUUID', uuid)
    });
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}/candidates`, uuids);
  }

  assignUsers(profileId: number, users: User[]): Observable<Profile> {
    return this.httpClient.put<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}/users`, users);
  }

  unassignUsers(profileId: number, users: User[]): Observable<Profile> {
    return this.httpClient.post<Profile>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/${profileId}/users/remove`, users);
  }

  assignProfiles(uuid: string, profiles: Profile[]): Observable<void> {
    return this.httpClient.put<void>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/users/${uuid}/profiles`, profiles);
  }

  unassignProfiles(uuid: string, profiles: Profile[]): Observable<void> {
    return this.httpClient.put<void>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/users/${uuid}/profiles/remove`, profiles);
  }

  countAll(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/count`);
  }

  getAllCreatedByLoggedUser(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/createdBy`);
  }

  getAllCreatedByUsername(username: string): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/createdBy/${username}`);
  }

  countAllCreatedByUsername(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/createdBy/${username}/count`);
  }

  countAllCreatedByLoggedUser(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/createdBy/count`);
  }

  delete(profile: Profile): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/delete`, profile);
  }

  getByIdsParams(ids: number[]): Observable<Profile[]> {
    let httpParams: HttpParams = new HttpParams();
    ids.forEach(id => {
      httpParams = httpParams.append('ids', id)
    });
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/ids`, {params: httpParams});
  }

  getByIdsBody(ids: number[]): Observable<Profile[]> {
    return this.httpClient.post<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/ids`, ids);
  }

  createBatch(profiles: Profile[]): Observable<Profile[]> {
    return this.httpClient.post<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/list`, profiles);
  }

  getByCreationDateRange(from: Date, to: Date): Observable<Profile[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('from', from.toString());
    httpParams = httpParams.append('to', to.toString());
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/range`, {params: httpParams});
  }

  getAllByTrackingCode(trackingCode: string): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/tracking-codes/${trackingCode}`);
  }

  getAllByType(type: string): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(
      `${this.rootService.serverUrl}${ProfileService.ROOT_PATH}/types/${type}`);
  }
}
