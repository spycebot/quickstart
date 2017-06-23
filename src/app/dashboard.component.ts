import { Component, OnInit } from '@angular/core';

import { Hero } 				from './hero';
import { HeroService } 			from './hero.service';
import { HeroSearchComponent }	from './hero-search.component'; // Thanks to https://github.com/angular/angular.io/issues/1996

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	directives: [HeroSearchComponent] // Thanks to https://github.com/angular/angular.io/issues/1996
})
export class DashboardComponent implements OnInit { 

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1,5));
	}
}