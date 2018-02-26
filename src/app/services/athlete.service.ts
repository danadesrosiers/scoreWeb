import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

const API_URI = 'http://localhost:8080/athlete';

@Injectable()
export class AthleteService {

  constructor(public api: HttpClient) { }

  getAthlete(id): Observable<Athlete> {
    return this.api.get<Athlete>(API_URI + '/' + id);
  }

  queryAthletes(): Observable<Athlete[]> {
    return this.api.get<Athlete[]>(API_URI);
  }

  deleteAthlete(id: number) {
    console.log('delete' + id);
    return this.api.delete(API_URI + '/' + id);
  }

  create(athlete: Athlete): Observable<Athlete> {
    return this.api.post<Athlete>(API_URI, athlete);
  }

  edit(athlete: Athlete) {
    return this.api.put<Athlete>(API_URI + '/' + athlete.id, athlete);
  }
}

export class Athlete {
  id: number;
  name: string;
  club: string;
  level: number;
}
