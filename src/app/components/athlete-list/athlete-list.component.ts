import { Component } from '@angular/core';
import { Athlete, AthleteService} from '../../services/athlete/athlete.service';
import { BaseListComponent } from '../base-list/base-list.component';

@Component({
  selector: 'app-athlete-list',
  templateUrl: '../base-list/base-list.component.html',
  styleUrls: ['../base-list/base-list.component.css']
})
export class AthleteListComponent extends BaseListComponent<Athlete> {
  constructor(protected service: AthleteService) {
    super(service);
  }

  getHeader = () => ['Name', 'Level', 'Club', ''];
  getProperties = () => ['name', 'level', 'club'];
}
