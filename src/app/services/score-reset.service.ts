import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ScoreResetService {
  resetScoreSubject: Subject<void> = new Subject<void>();
  resetScoreObj$: Observable<void> = new Observable<void>();

  constructor(public dialog: MatDialog) {
    this.resetScoreObj$ = this.resetScoreSubject.asObservable();
   }

   public endGame(modalTitle: string): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {title : modalTitle}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        // Another modal with sorted list of players with highest points
        this.resetScoreSubject.next();
      }
    });
  }
}
