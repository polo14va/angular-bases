import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Goku",
    power: 15000
  }];

  @Output()
  public deleteCharacter:EventEmitter<String> = new EventEmitter();


  deleteCharacterFromList(id?: String): void {

    if (!id) {
      return;
    }
    this.deleteCharacter.emit(id);
  }

}
