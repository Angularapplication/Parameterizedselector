export enum Card {
    ACE = 'ace',
    KING = 'king',
    QUEEN = 'queen',
    JACK = 'jack'
  }
  
  export enum Color {
    CLUBS = 'clubs',
    DIAMONDS = 'diamonds',
    HEARTS = 'hearts',
    SPADES = 'spades'
  }
  
  export interface CardSet {
    atout: Card;
    count: number;
  }
  