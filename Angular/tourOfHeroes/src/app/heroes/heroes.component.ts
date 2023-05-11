import {Component} from '@angular/core';
import {Hero} from "../hero";
import {Heroes} from "../mock-hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent {

  // Declaring the selected hero (?) means it is optional :
  selectedHero ?: Hero;

  // Defining an object hero of type Hero
  my_hero: Hero = {
    id: 0,
    name: "Ashe",
    type: "Marksmen",
    year: 2003
  }

  // Exposing the Heroes from the mock-hero file
  heroes = Heroes;


  // the onSelect function that changes the value of the selectedHero
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }


}
