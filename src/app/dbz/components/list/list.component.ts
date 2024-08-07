import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // este decorador (Input), nos permite obtener valores desde el padre, con el nombre [characterList]
  @Input()
  public characterList: Character[] = [];
}
