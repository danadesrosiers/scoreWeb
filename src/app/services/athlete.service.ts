import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

const API_URI = 'http://localhost:8080/athlete';

@Injectable()
export class AthleteService {

  constructor(public api: Http) { }

  getAthlete(id): Observable<Athlete> {
    return this.api.get(API_URI + '/' + id).map(res => res.json());
  }

  queryAthletes(): Observable<Athlete[]> {
    return this.api.get(API_URI).map(res => res.json());
  }

  deleteAthlete(id: number) {
    console.log('delete' + id);
    return this.api.delete(API_URI + '/' + id);
  }

  create(athlete: Athlete): Observable<Athlete> {
    return this.api.post(API_URI, athlete).map(res => res.json());
  }

  edit(athlete: Athlete) {
    return this.api.put(API_URI + '/' + athlete.id, athlete).map(res => res.json());
  }
}

export class Athlete {
  id: number;
  name: string;
  club: string;
  level: number;
}
