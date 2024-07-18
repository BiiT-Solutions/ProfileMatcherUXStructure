import { Injectable } from '@angular/core';
import {ProfileMatcherRootService} from "./profile-matcher-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileCandidateComment} from "../models/profile-candidate-comment";
import {ProfileCandidateId} from "../models/profile-candidate-id";

@Injectable({
  providedIn: 'root'
})
export class ProfileCandidateCommentService {
  private static readonly ROOT_PATH: string = '/profiles-candidates-comments'

  constructor(private rootService: ProfileMatcherRootService, private httpClient: HttpClient) { }

  getAll(): Observable<ProfileCandidateComment[]> {
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}`);
  }
  update(profileCandidateComment: ProfileCandidateComment): Observable<ProfileCandidateComment> {
    return this.httpClient.put<ProfileCandidateComment>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}`, profileCandidateComment);
  }
  create(profileCandidateComment: ProfileCandidateComment): Observable<ProfileCandidateComment> {
    return this.httpClient.post<ProfileCandidateComment>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}`, profileCandidateComment);
  }
  getById(id: ProfileCandidateId): Observable<ProfileCandidateComment> {
    return this.httpClient.get<ProfileCandidateComment>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/${id}`);
  }
  deleteById(id: ProfileCandidateId): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/${id}`);
  }
  countAll(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/count`);
  }
  getAllCreatedByLoggedUser(): Observable<ProfileCandidateComment[]> {
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/createdBy`);
  }
  getAllCreatedByUsername(username: string): Observable<ProfileCandidateComment[]> {
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/createdBy/${username}`);
  }
  countAllCreatedByUsername(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/createdBy/${username}/count`);
  }
  countAllCreatedByLoggedUser(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/createdBy/count`);
  }
  delete(profileCandidateComment: ProfileCandidateComment): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/delete`, profileCandidateComment);
  }
  getByIdsParams(ids: number[]): Observable<ProfileCandidateComment[]> {
    let httpParams: HttpParams = new HttpParams();
    ids.forEach(id => {
      httpParams = httpParams.append('ids', id)
    });
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/ids`, {params: httpParams});
  }
  getByIdsBody(ids: number[]): Observable<ProfileCandidateComment[]> {
    return this.httpClient.post<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/ids`, ids);
  }
  createBatch(profileCandidateComments: ProfileCandidateComment[]): Observable<ProfileCandidateComment[]> {
    return this.httpClient.post<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/list`, profileCandidateComments);
  }
  getAllByProfileId(profileId: number): Observable<ProfileCandidateComment[]> {
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/profiles/${profileId}`);
  }
  getByProfileIdAndUserUuid(profileId: number, userUuid: string): Observable<ProfileCandidateComment> {
    return this.httpClient.get<ProfileCandidateComment>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/profiles/${profileId}/users/${userUuid}`);
  }
  deleteByProfileIdAndUserUuid(profileId: number, userUuid: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/profiles/${profileId}/users/${userUuid}`);
  }
  updateByProfileIdAndUserUuid(profileId: number, userUuid: string, comment: string): Observable<ProfileCandidateComment> {
    return this.httpClient.put<ProfileCandidateComment>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/profiles/${profileId}/users/${userUuid}/comments/${comment}`, null);
  }
  getByCreationDateRange(from: Date, to: Date): Observable<ProfileCandidateComment[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('from', from.toString());
    httpParams = httpParams.append('to', to.toString());
    return this.httpClient.get<ProfileCandidateComment[]>(
      `${this.rootService.serverUrl}${ProfileCandidateCommentService.ROOT_PATH}/range`, {params: httpParams});
  }
}
