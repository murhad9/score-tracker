import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.css']
})
export class TeamScoreComponent implements OnInit {
  @Input() team: Player[];

  constructor() {
  }

  ngOnInit(): void {
    console.log('ici', this.team);

  }

}
