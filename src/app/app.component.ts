import { Component } from '@angular/core';
import { Player } from './interfaces/player';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public dialog: MatDialog) {

  }
  defaultTeam: Player[] = [
    { id: Math.random(), name: 'Player 1', score: 0},
  ];
  defaultTeam2: Player[] = [
    { id: Math.random(), name: 'Player 1', score: 0},
  ];

  firstTeam = 'Team 1';
  secondTeam = 'Team 2';

  public finishGame(): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
     data: {
      title : 'End game ?',
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        console.log('lol');
      }
    });
  }

}
