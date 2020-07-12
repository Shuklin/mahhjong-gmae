import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../game-logic.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() onSelectCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickCard(card: Card): void {
    if (card.type === 'hidden') {
      this.onSelectCard.emit(card);
    }
  }
}
