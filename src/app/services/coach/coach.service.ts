import { Injectable } from '@angular/core';
import {RestService, Resource} from '../rest.service';

@Injectable()
export class CoachService extends RestService<Coach> {
  API_URI = 'http://localhost:8080/coach';
}

export class Coach extends Resource {
  name: string;
  club: string;
  address: object; // TODO: Add an Address component
}
