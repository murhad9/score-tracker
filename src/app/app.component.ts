import { Component } from '@angular/core';
import { Player } from './interfaces/player';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ScoreResetService } from './services/score-reset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

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
