import { Component, OnInit } from '@angular/core';
import { Card, MonsterCard, EffectMonsterCard, SpellCard } from '../app.module';
import { isNull, isUndefined, isNullOrUndefined } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'crud-action',
  templateUrl: './crud-action.component.html',
  styleUrls: ['./crud-action.component.css']
})
export class CrudActionComponent implements OnInit {

  //current Fields
  currentName: string = "";
  currentDescription: string = "";
  currentCardType: string = "";
  //monster card related
  currentATK: number;
  currentDEF: number;
  currentLevel: number;
  currentAttribute: string = "";
  currentElement: string = "";
  currentArchetype: string = "";
  //Spell card related
  currentSpellType: string = "";
  //CRUD action
  selectedAction: string;
  actionCompleted: boolean;


  cardTypes: string[] = [
    'Spell',
    'Normal Monster',
    'Effect Monster'
  ];
  spellTypes: string[] = [
    'Continous',
    'Trap',
    'Field'
  ];

  isComplete: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.checkFormCompletion();
    setInterval(this.checkFormCompletion, 500);
  }

  sendCard(){
    let newCard;
    let newCardType;
    if (this.currentCardType == "Spell"){
      newCardType = "spell";
      newCard = {
        Name: this.currentName,
        Description: this.currentDescription,
        Type: {
          Name: this.currentCardType,
          URL: "localhost:4000"
        },
        SpellType: this.currentSpellType
      };
    }
    else if (this.currentCardType == "Normal Monster"  || this.currentCardType == "Effect Monster"){
      if (this.currentCardType == "Normal Monster"){
        newCardType = "normalmonster";
      }
      else if (this.currentCardType == "Effect Monster"){
        newCardType = "effectmonster";
      }
      newCard = {
        Name: this.currentName,
        Description: this.currentDescription,
        Type: {
          Name: this.currentCardType,
          URL: "localhost:4000"
        },
        ATK: this.currentATK,
        DEF: this.currentDEF,
        Level: this.currentLevel,
        Element: {
          Name: this.currentElement
        },
        Archetype: this.currentArchetype,
        Attribute: this.currentAttribute
      };
    }

    if (this.selectedAction == "Post"){
      this.api.postCard(newCard, newCardType).subscribe(result =>{
        if (result != null){
          this.actionCompleted = true;
        }
      })
    }
  }

  checkFormCompletion() {
    if (this.currentName == "") {
      this.isComplete = false;
    }
    else{
      this.isComplete = true;
    }
  }
}
