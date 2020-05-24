import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'all-pokemon-cards',
  templateUrl: './all-pokemon-cards.component.html',
  styleUrls: ['./all-pokemon-cards.component.css']
})
export class AllPokemonCardsComponent implements OnInit {

  allCards: any[];

  constructor(private api: PokemonApiService) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.api.getAllCards().subscribe(results =>{
      this.allCards = results.cards;
    })
  }

}
