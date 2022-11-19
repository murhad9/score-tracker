import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TITLE_END_GAME, TITLE_RESET_SCORE, MESSAGE_RESET_SCORE } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ScoreResetService {
  resetScoreSubject: Subject<void> = new Subject<void>();
  resetScoreObj$: Observable<void> = new Observable<void>();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) {
    this.resetScoreObj$ = this.resetScoreSubject.asObservable();
   }

   public endGame(modalTitle: string): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {title : modalTitle}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        // If end game, add another modal with sorted list of players with highest points

        this.resetScoreSubject.next();
        if (modalTitle === TITLE_RESET_SCORE) {
            this.snackBar.open(MESSAGE_RESET_SCORE, 'Close', {
              duration: 3000
            });
        }
      }
    });
  }
}
