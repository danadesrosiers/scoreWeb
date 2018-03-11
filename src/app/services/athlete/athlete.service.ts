import { Injectable } from '@angular/core';
import {BaseService, Resource} from '../base.service';

@Injectable()
export class AthleteService extends BaseService<Athlete> {
  API_URI = 'http://localhost:8080/athlete';
}

export class Athlete extends Resource {
  name: string;
  club: string;
  level: number;
}
