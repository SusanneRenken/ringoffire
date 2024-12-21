import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game?: Game; //Das Fragezeichen ist von ChatGPT - Bei Junus geht es ohne, warum auch immer

  constructor(public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (this.game && this.game.stack.length > 0) {
      this.currentCard = this.game.stack.pop() as string;

      this.pickCardAnimation = true;

      this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
      
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game?.playedCards.push(this.currentCard);
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      console.log(name);
      this.game?.players.push(name);
    });
  }

}