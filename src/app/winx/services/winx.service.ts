import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Character } from "../interfaces/character.interface";


@Injectable({
  providedIn: 'root'
})

export class WinxService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Bloom',
    power: 7000
  },{
    id: uuid(),
    name: 'Stella',
    power: 9500
  },{
    id: uuid(),
    name: 'Flora',
    power: 3000
  }];

  addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push( newCharacter );
  }

  // onDeleteCharacter(index:number) { this.characters.splice(index, 1); }
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
