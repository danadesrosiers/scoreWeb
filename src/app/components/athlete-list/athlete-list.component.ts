import { Component, OnInit } from '@angular/core';
import { AthleteService, Athlete} from '../../services/athlete/athlete.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {
  athletes: Athlete[];
  athlete = new Athlete();
  editID: number;
  showAddForm = false;

  // new Athlete
  constructor(private athleteService: AthleteService) { }

  ngOnInit() {
    this.athleteService.query().subscribe(athletes => {
      this.athletes = athletes;
    });
  }

  deleteAthlete(id) {
    this.athleteService.delete(id).subscribe(() => {
      this.athletes = this.athletes.filter( athlete => athlete.id !== id );
    });
  }

  submitAthlete() {
    this.athleteService.create(this.athlete).subscribe(athlete => {
      console.log(athlete);
      this.athletes.push(athlete); // add new athlete to the list
      this.athlete = new Athlete; // clear the form
    });
  }

  editAthlete(athlete: Athlete) {
    this.athleteService.edit(athlete).subscribe();  // We'll just assume it was successful for now
    this.editID = 0;
  }
}
