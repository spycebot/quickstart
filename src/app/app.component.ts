import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES:Hero[] = [
  { id: 11, name: 'Hermes Mercury'},
  { id: 12, name: 'Aphrodite Venus'},
  { id: 13, name: 'Gaia Gaea'},
  { id: 14, name: 'Ares Mars'},
  { id: 15, name: 'Zeus Jupiter'},
  { id: 16, name: 'Cronos Saturn'},
  { id: 17, name: 'Ouranos Uranus'},
  { id: 18, name: 'Poseidon Neptune'},
  { id: 19, name: 'Demeter Ceres'},
  { id: 20, name: 'Hades Pluto'},
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero"(click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
    	<label>name: </label>
    	<input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  <!-- div><label>name: </label>{{hero.name}}</div -->
  `,
  styles: [`
    .selected { 
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: 0.5em;
      padding: 0.3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD
      left: 0.1em
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: 0.8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  { 
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
	hero: Hero = {
		id: 1,
		name: 'Shannon Ware'
	}
	title = 'Tour of Heroes'; 
	//hero = 'Windstorm';
}
