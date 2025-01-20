import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ): void {
    if ( !id ) return;
    // console.log({id});
    this.onDelete.emit( id );
  }


  // onDeleteCharacter(index: number): void {
  //   // TODO: Emitir el ID del personaje
  //   console.log({index});
  //   this.onDelete.emit(index);
  // }
}
