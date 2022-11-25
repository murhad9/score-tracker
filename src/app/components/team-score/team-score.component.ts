import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { ScoreResetService } from 'src/app/services/score-reset.service';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.css']
})
export class TeamScoreComponent implements OnInit {
  @Input() team: Player[];
  @Input() teamName = 'Team';
  totalScore = 0;

  constructor(public scoreReset: ScoreResetService) {
    this.scoreReset.resetScoreObj$.subscribe( () => {
      this.team.forEach( player => {
        player.score = 0;
      });
      this.totalScore = 0;
  });

  }

  ngOnInit(): void {
  }

  public calculateScore(): number {
    return this.team.reduce((sum, player) => {
      return sum + player.score;
    }, 0);
  }

  public updatePoints(index: number, points: number): void {
    let scoreCounter = 0;
    const ADD_POINT = points > 0 ? 1 : -1;
    const MAX_POINTS = 10;
    const INTERVAL = 30;

    const scorePoints = window.setInterval(() => {
      scoreCounter++;
      this.team[index].score += ADD_POINT;
      if (scoreCounter === MAX_POINTS) {
        clearInterval(scorePoints);
      }
    }, INTERVAL);
  }

  public addPlayer(): void {
    const player =  { id: Math.random(), name: 'Player ' + (this.team.length + 1), score: 0};
    this.team.push(player);
  }

  public deletePlayer(index: number, playerToRemove: Player): void {
    this.team.find(player => player.id === playerToRemove.id);
    this.team.splice(index, 1);
    this.totalScore -= playerToRemove.score;
  }

}
