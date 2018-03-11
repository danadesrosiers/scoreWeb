import { Injectable } from '@angular/core';
import {BaseService, Resource} from '../base.service';

@Injectable()
export class CoachService extends BaseService<Coach> {
  API_URI = 'http://localhost:8080/coach';
}

export class Coach extends Resource {
  name: string;
  club: string;
  address: object; // TODO: Add an Address component
}
