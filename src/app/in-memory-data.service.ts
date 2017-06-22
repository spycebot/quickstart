import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			{ id: 0, name: 'Pythagarus' },
			{ id: 11, name: 'Euclid' },
			{ id: 12, name: 'Johannes Goethe' },
			{ id: 13, name: 'Isaac Newton' },
			{ id: 14, name: 'Michael Faraday' },
			{ id: 15, name: 'Nicola Tesla' },
			{ id: 16, name: 'Linus Pauling' },
			{ id: 17, name: 'Claude Shannon' },
			{ id: 18, name: 'Alan Turing' },
			{ id: 19, name: 'Buckminster Fuller' },
			{ id: 20, name: 'Linus Torvald' }
		];
		return { heroes };
	}
}