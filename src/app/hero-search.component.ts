import { Component, OnInit }	from '@angular/core';
import { Router }				from '@angular/router';

import { Observable }			from 'rxjs/Observable';
import { Subject }				from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService }	from './hero-search.service';
import { Hero } from './hero';

@Component({
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css'],
	providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes = this.searchTerms
			.debounceTime(300) 			// Wait 300ms after each keystroke before considering the term
			.distinctUntilChanged()		// Ignore if next search term is same as previous 	// Below (1) switch to new observable each time the term changes (2) return the http search observable, and (3) or the observable of empty heroes of there was no search term
			.switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
			.catch(error => {
				console.log(error);
				return Observable.of<Hero[]>([]);
			});
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}