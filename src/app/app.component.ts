import { Component } from '@angular/core';
import { Player } from './interfaces/player';
import {MatDialog} from '@angular/material/dialog';
import { ScoreResetService } from './services/score-reset.service';
import { TITLE_END_GAME, TITLE_RESET_SCORE } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  readonly END_GAME = TITLE_END_GAME;
  readonly RESET_SCORE = TITLE_RESET_SCORE;

  constructor(
    public dialog: MatDialog,
    public scoreReset: ScoreResetService
    ) {

  }
  defaultTeam: Player[] = [
    { id: Math.random(), name: 'Player 1', score: 0},
  ];
  defaultTeam2: Player[] = [
    { id: Math.random(), name: 'Player 1', score: 0},
  ];

  firstTeam = 'Team 1';
  secondTeam = 'Team 2';



}
