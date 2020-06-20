import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { Card, Color, CardSet } from './model';
import { GameFeatureState, getGameCardSet } from './store';
import { getGameAtout } from './store';
import { getGameCount } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parameterizedselector';
  hearts$: Observable<CardSet>;
  clubs$: Observable<Card>;
  spades$: Observable<number>;

  constructor(private store: Store<GameFeatureState>) { }

  ngOnInit() {
    this.hearts$ = this.store.pipe(
      select(getGameCardSet(Color.HEARTS))
    );

    this.clubs$ = this.store.pipe(
      select(getGameAtout(Color.CLUBS))
    );

    this.spades$ = this.store.pipe(
      select(getGameCount(Color.SPADES))
    );
  }


}
