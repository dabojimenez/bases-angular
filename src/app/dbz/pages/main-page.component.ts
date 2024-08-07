import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  // es un pat relativo a donde esta el archivo html
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 560
  }, {
    name: 'Goku',
    power: 1025
  }, {
    name: 'Vegeta Manlo',
    power: 1523
  }];
}
