import { Component } from '@angular/core';
import { Player } from './interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  defaultTeam: Player[] = [
    { name: 'Player 1', score: 0},
    { name: 'Player 2', score: 0},
    { name: 'Player 3', score: 0},
    { name: 'Player 2', score: 0}
  ];
}
