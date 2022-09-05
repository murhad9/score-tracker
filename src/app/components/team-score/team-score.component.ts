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
  }

  public calculateScore(): number {
    return this.team.reduce((sum, player) => {
      return sum + player.score;
    }, 0);
  }

  public updatePoints(index: number, points: number): void {
      this.team[index].score += points;
  }

  public addPlayer(): void {
    if (this.team.length < 4 ) {
      this.team.push( { name: 'Player ' + (this.team.length + 1), score: 0});
    }
  }

}
