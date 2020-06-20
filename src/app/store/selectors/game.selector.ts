import { createSelector } from '@ngrx/store';

import { Color, CardSet } from '../../model';
import * as fromFeature from '../reducers';
import * as fromGame from '../reducers/game.reducer';

export const getGameState = createSelector(
  fromFeature.getGameFeatureState,
  state => { console.log("getGameState"); console.log(state);  return state;} // shouldn't this be: state => state.gameReducer?
);

export const getGameCardSet = (color: Color) => createSelector(
  getGameState,
  state =>{ console.log("getGameCardSet"); console.log("State Color"); console.log(state[color]); return state[color]}
);

export const getGameAtout = (color: Color) => createSelector(
  getGameCardSet(color),
  cardset =>{ console.log("getGameAtout"); console.log("cardset.atout"); console.log(cardset.atout); return  cardset.atout;}
);

export const getGameCount = (color: Color) => createSelector(
  getGameCardSet(color),
  cardset =>{  console.log("getGameCount"); console.log("cardset.count"); console.log(cardset.count); return cardset.count;}
);
