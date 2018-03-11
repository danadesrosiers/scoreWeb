import { Component } from '@angular/core';
import { Athlete, AthleteService} from '../../services/athlete/athlete.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-athlete-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class AthleteListComponent extends ListComponent<Athlete> {
  constructor(protected service: AthleteService) {
    super(service);
  }

  getHeader = () => ['Name', 'Level', 'Club', ''];
  getProperties = () => ['name', 'level', 'club'];
}
