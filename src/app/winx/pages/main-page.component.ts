import {Component, OnInit} from '@angular/core'
import { Character } from '../interfaces/character.interface';
import { WinxService } from '../services/winx.service';

@Component({
  standalone: false,
  selector: 'app-winx-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private winxService: WinxService ) {  }

  get characters(): Character[] {
    return [...this.winxService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.winxService.deleteCharacterById( id );
  }

  onNewCharacter( characters: Character ): void {
    this.winxService.addCharacter( characters );
  }

}
