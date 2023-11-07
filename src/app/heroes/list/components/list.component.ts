import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: '../list.component.html',
  styleUrls: ['../list.component.css']
})
export class ListComponent {

  public heroNombre: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];

  public deleteHero?: string = '';

  removeLastHero(): void {
    const deleteHero = this.heroNombre.pop();
    console.log(deleteHero);
  }
}
