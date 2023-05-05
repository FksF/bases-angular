import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  public character: Character = {
    name: '',
    power: 0
  };
  @Output() 
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitCharacter(): void {
    console.log({...this.character});
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character = { name: '', power: 0 };
  }
}
