import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';


@NgModule({
  declarations: [
    // colocamos los componnetes que vamos a usar en este modulo
    MainPageComponent
  ],
  exports: [
    // exportamos los componentes que queremso que se vean desde otro modulo
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class DbzModule { }
