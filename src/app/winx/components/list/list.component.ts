import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'winx-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Flora',
    power: 3000
  }]
}
