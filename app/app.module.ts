import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule}	 from '@angular/forms';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MyVeryComponent } from './my-very.component';
import { AppComponent} from './app.component';
import { HeroService} from './hero.service';
import { Dashboard} from './dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'heroes', component: HeroesComponent},
      {path: 'dashboard', component: Dashboard},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'detail/:id', component: HeroDetailComponent}])
   ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, MyVeryComponent, Dashboard ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})


export class AppModule { }
