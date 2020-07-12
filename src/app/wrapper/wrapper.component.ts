import {Component, OnInit} from '@angular/core';
import {Card, GameLogicService} from './game-logic.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  primeList: number[];
  cardsNumList: Card[];

  firstSelectedCard: Card;
  secondSelectedCard: Card;

  previewTimer;

  isClickDisabled: boolean = false;

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.primeList = this.gameLogicService.getPrimeList(50);
    this.primeList.push(...this.primeList);

    this.cardsNumList = this.gameLogicService.getRandomOrderCards(this.primeList);

    this.previewTimer = setTimeout(() => {
      this.cardsNumList.forEach((card, index) => {card.type = 'hidden';});
    }, 5000);
  }


  selectCard(event): void {
    this.cardsNumList[event.id].type = 'selected';
    if (this.firstSelectedCard) {
      this.secondSelectedCard = event;
      this.compareCards();
    } else {
      this.firstSelectedCard = event;
    }
  }

  compareCards(): void {
    this.isClickDisabled = true;
    if (this.firstSelectedCard.value === this.secondSelectedCard.value) {
      this.cardsNumList[this.firstSelectedCard.id].type = 'solved';
      this.cardsNumList[this.secondSelectedCard.id].type = 'solved';
      this.firstSelectedCard = null;
      this.secondSelectedCard = null;
      this.isClickDisabled = false;

    } else {
      this.cardsNumList[this.firstSelectedCard.id].type = 'incorrect';
      this.cardsNumList[this.secondSelectedCard.id].type = 'incorrect';

      setTimeout(() => {
        this.cardsNumList[this.firstSelectedCard.id].type = 'hidden';
        this.cardsNumList[this.secondSelectedCard.id].type = 'hidden';
        this.firstSelectedCard = null;
        this.secondSelectedCard = null;
        this.isClickDisabled = false;
      }, 1000);
    }
  }
}
