import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCharacter(id: string): void {
    console.log({id});
    this.onDeleteId.emit(id);
  }

}
