import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Black Widow', 'Scarlet witch', 'Gamora', 'Nebula', 'Hawk Eye']
public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    // console.log({deletedHero})
  }
}
