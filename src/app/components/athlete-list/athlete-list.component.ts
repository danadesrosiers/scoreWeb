import { Component, OnInit } from '@angular/core';
import { AthleteService, Athlete} from '../../services/athlete.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {
  athletes: Athlete[];
  athlete = new Athlete(); // new Athlete
  constructor(private athleteService: AthleteService) { }

  ngOnInit() {
    this.athleteService.queryAthletes().subscribe(athletes => {
      console.log(athletes);
      this.athletes = athletes;
    });
  }

  deleteAthlete(id) {
    this.athleteService.deleteAthlete(id).subscribe(() => {
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
}
