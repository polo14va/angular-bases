import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../hero.component.html',
  styleUrls: ['../hero.component.css']
})
export class HeroComponent {
  public name: string = "SpideCerdo";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "IronMan";
  }

  changeAge():void{
    this.age = 50;
  }

  resetForm():void{
    this.name = "SpideCerdo";
    this.age = 45;

    //document.querySelectorAll("h1")!.forEach( element => {
    //   element.innerHTML ='<h1>PRUEBA</h1>';
    //});
  }
}
