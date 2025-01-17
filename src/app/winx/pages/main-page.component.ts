import {Component, OnInit} from '@angular/core'
import { Character } from '../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'app-winx-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Bloom',
    power: 7000
  },{
    name: 'Stella',
    power: 9500
  },{
    name: 'Flora',
    power: 3000
  }];
}
