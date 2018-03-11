import { Component } from '@angular/core';
import {BaseListComponent} from '../base-list/base-list.component';
import {Coach, CoachService} from '../../services/coach/coach.service';

@Component({
  selector: 'app-coach-list',
  templateUrl: '../base-list/base-list.component.html',
  styleUrls: ['../base-list/base-list.component.css']
})
export class CoachListComponent extends BaseListComponent<Coach> {
  constructor(protected service: CoachService) {
    super(service);
  }

  getHeader = () => ['Name', 'Club', 'Address'];
  getProperties = () => ['name', 'club', 'address'];
}
