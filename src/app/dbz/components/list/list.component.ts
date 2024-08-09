import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteIdEmit: EventEmitter<number> = new EventEmitter();

  // este decorador (Input), nos permite obtener valores desde el padre, con el nombre [characterList]
  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(index: number): void{
    // TODO: Emitir el id del personaje
    // console.log({index});
    this.onDeleteIdEmit.emit(index);
  }

  // onDeleteId = Index Value : number
}
