import { Card, CardSet, Color } from '../../model';

export interface State {
  clubs: CardSet;
  diamonds: CardSet;
  hearts: CardSet;
  spades: CardSet;
}

const initialState: State = {
  clubs: { atout: Card.ACE, count: 1 },
  diamonds: { atout: Card.KING, count: 2 },
  hearts: { atout: Card.QUEEN, count: 3 },
  spades: { atout: Card.JACK, count: 4 }
};

export function reducer(
  state = initialState,
  action: any
): State {
  console.log("reducer");
  console.log("Action");
  console.log(action);
  console.log("State");
  console.log(state);
  return state;
}

export const getAtout = (color) => (state: State) =>{ console.log("getAtout"); return state[color].atout};
export const getCount = (color) => (state: State) =>{ console.log("getCount"); return state[color].count};
