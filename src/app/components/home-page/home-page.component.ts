import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  defaultTeam: Player[] = [{ name: 'Player 1', score: 0}];

  constructor() { }

  ngOnInit(): void {
  }

}
