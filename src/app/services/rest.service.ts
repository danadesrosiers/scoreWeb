import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export abstract class RestService<T extends Resource> {
  abstract API_URI: string;

  constructor(protected api: HttpClient) { }

  get(id: number): Observable<T> {
    return this.api.get<T>(this.API_URI + '/' + id);
  }

  query(): Observable<T[]> {
    return this.api.get<T[]>(this.API_URI);
  }

  create(resource: T): Observable<T> {
    return this.api.post<T>(this.API_URI, resource);
  }

  edit(resource: T): Observable<T> {
    return this.api.put<T>(this.API_URI + '/' + resource.id, resource);
  }

  delete(id: number) {
    return this.api.delete(this.API_URI + '/' + id);
  }
}

export abstract class Resource {
  id: number;
}
