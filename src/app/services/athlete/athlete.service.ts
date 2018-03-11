import { Injectable } from '@angular/core';
import {RestService, Resource} from '../rest.service';

@Injectable()
export class AthleteService extends RestService<Athlete> {
  API_URI = 'http://localhost:8080/athlete';
}

export class Athlete extends Resource {
  name: string;
  club: string;
  level: number;
}
