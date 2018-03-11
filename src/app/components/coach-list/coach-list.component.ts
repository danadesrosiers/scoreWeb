import { Component } from '@angular/core';
import {ListComponent} from '../list/list.component';
import {Coach, CoachService} from '../../services/coach/coach.service';

@Component({
  selector: 'app-coach-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class CoachListComponent extends ListComponent<Coach> {
  constructor(protected service: CoachService) {
    super(service);
  }

  getHeader = () => ['Name', 'Club', 'Address'];
  getProperties = () => ['name', 'club', 'address'];
}
