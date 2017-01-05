import {Component, Input} from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import { HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';
import {OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private heroService: HeroService
  ) {}
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
