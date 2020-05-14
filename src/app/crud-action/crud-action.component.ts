import { Component, OnInit } from '@angular/core';
import { Card, MonsterCard, EffectMonsterCard, SpellCard } from '../app.module';
import { isNull, isUndefined } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'crud-action',
  templateUrl: './crud-action.component.html',
  styleUrls: ['./crud-action.component.css']
})
export class CrudActionComponent implements OnInit {

  selectedAction: string;

  currentCard: any = {
    Name: '',
    Description: '',
    Type: {
      Name: ''
    },
    Element: {
      Name: ''
    },
    Attribute: '',
    Archetype: ''
  };
  cardTypes: string[] = [
    'Spell',
    'Normal Monster',
    'Effect Monster'
  ];
  spellTypes: string[] =[
    'Continous',
    'Trap',
    'Field'
  ];
  
  isComplete: boolean = false;

  constructor() { }

  ngOnInit() {
    this.checkFormCompletion();
  }

  checkFormCompletion() {
    if (this.currentCard.Name == '') {
      this.isComplete = false;
    }
    else {
      this.isComplete = true;
    }
    console.log(this.isComplete)
  }

  logCurrentCard(){
    console.log(this.currentCard)
  }

}
