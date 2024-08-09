import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    // colocamos los componnetes que vamos a usar en este modulo
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    // exportamos los componentes que queremso que se vean desde otro modulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
