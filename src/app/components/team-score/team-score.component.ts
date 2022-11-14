import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.css']
})
export class TeamScoreComponent implements OnInit {
  @Input() team: Player[];
  @Input() teamName = 'Team';
  totalScore = 0;

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
      this.totalScore += points;
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
