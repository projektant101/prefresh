import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class Dashboard implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
   this.heroService.getHeroes().then(h => this.heroes = h.slice(1, 5));
  }
}
