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

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteId(index: number): void {
    // el uno que le pasamos, apra indicar un elemento
    // documentacion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.characters.splice(index, 1);
  }
}
