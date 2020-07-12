import {Injectable} from '@angular/core';

export class Card {
  id: number;
  value: number;
  type: string;
  constructor(data) {
    this.id = data.id;
    this.value = data.value;
    this.type = data.type;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor() {
  }

  getPrimeList(max: number): number[] {
    let store = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
      if (!store[i]) {
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          store[j] = true;
        }
      }
    }
    return primes;
  }

  getRandomOrderCards(numArray: number[]): Card[] {
    const randomValues = numArray.sort(() => Math.random() - 0.5);
    return randomValues.map((value, index) => new Card({value, id: index, type: 'preview'}));
  }
}
