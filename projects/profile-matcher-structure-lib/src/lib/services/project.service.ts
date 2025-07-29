import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../models/profile";
import {ProjectMatcherRootService} from "./project-matcher-root.service";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private static readonly ROOT_PATH: string = '/projects'

  constructor(private rootService: ProjectMatcherRootService, private httpClient: HttpClient) {
  }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}`);
  }

  update(Project: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}`, Project);
  }

  create(Project: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}`, Project);
  }

  getById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/${id}`);
  }

  assignProfiles(projectId: number, profiles: Profile[]): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/${projectId}`, profiles);
  }

  unassignProfiles(projectId: number, profiles: Profile[]): Observable<Project> {
    return this.httpClient.post<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/${projectId}/remove`, profiles);
  }

  assignProjects(profileId: number, projects: Project[]): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/profiles/${profileId}`, projects);
  }

  unassignProjects(profileId: number, projects: Project[]): Observable<Project> {
    return this.httpClient.post<Project>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/profiles/${profileId}/remove`, projects);
  }

  delete(project: Project): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ProjectService.ROOT_PATH}/delete`, project);
  }
}
