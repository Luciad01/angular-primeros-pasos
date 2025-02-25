import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  public var: boolean = false;

  get capitalizedName(): string { //  Los getters se ven como propiedades.
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {  //  Método.
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Black Widow';
  }

  changeAge(): void{
    this.age = 37;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }

}
