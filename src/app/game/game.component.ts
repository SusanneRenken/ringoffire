import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game?: Game; //Das Fragezeichen ist von ChatGPT - Bei Junus geht es ohne, warum auch immer

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

      // this.pickCardAnimation = true;
      this.game.playedCards.push(this.currentCard);

      // setTimeout(() => {
      //   this.pickCardAnimation = false;
      // }, 1000);
    }
  }


}