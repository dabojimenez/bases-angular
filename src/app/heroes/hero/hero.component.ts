import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  // un (get) es un metodo de acceso aun que puede ser considerado como una propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // (getHeroDescription): este es un metodo y al invocar lo debemos hacer con parentesis
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    // //TODO:
    // throw 'Metodo no implementado';
    this.name = 'Stalyn Hero';
  }

  changeAge(): void {
    this.age = 27;
  }

}
