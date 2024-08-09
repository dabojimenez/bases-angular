import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // emisor de eventos, apra poder emitr al padre, ademas agregandole el decorador @Output
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // debugger;
    console.log(this.character);

    // validmaos si tiene nombre
    if (this.character.name.length === 0) return;

    // emitimos el valor o el character, al padre
    this.onNewCharacter.emit({ ...this.character });

    // limpiamos los valores
    this.character = { name: '', power: 0 }
  }
}
