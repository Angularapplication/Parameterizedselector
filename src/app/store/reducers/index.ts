import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGame from './game.reducer';

export interface GameFeatureState {
  gameReducer: fromGame.State;
}

export const reducers: ActionReducerMap<GameFeatureState> = {
  gameReducer: fromGame.reducer
};

export const getGameFeatureState = createFeatureSelector<GameFeatureState>('gameReducer');
