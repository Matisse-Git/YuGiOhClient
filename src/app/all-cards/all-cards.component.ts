import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from '../api.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  allCards: any[] = [];

  //paginator Options
  pageSize: number = 50;
  length: number;
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: this.pageSize,
    previousPageIndex: 1,
    length: this.length
  };

  //sort related
  currentSortType: string = "name";
  currentSortDir: string = "asc";

  //getById related
  currentId: string;
  idOptions: number[] = [];

  constructor(
    private api: ApiService) { }

  ngOnInit(): void {
    this.getAllCards();
    this.initializeIdOptions();
  }

  initializeIdOptions() {
    this.api.getAllCards(0, 99999, undefined, undefined).subscribe(cards => {
      this.length = cards.length;
      for (let i = 1; i < this.length + 1; i++) {
        const idOption = i;
        this.idOptions.push(idOption);
      }
    })
  }

  getAllCards() {
    this.api.getAllCards(0, 99999, undefined, undefined).subscribe(cards => {
      this.length = cards.length;
    })
    if (isNullOrUndefined(this.pageEvent)) {
      this.api.getAllCards(0, this.pageSize, this.currentSortType, this.currentSortDir).subscribe(cards => {
        this.allCards = cards;
      })
    }
    else {
      this.api.getAllCards(this.pageEvent.pageIndex, this.pageEvent.pageSize, this.currentSortType, this.currentSortDir).subscribe(cards => {
        this.allCards = cards;
      })
    }
  }

  getCardById(id: string) {
    if (id == ""){
      this.getAllCards();
    }
    else{      
      this.api.getCardById(id).subscribe(card => {
        this.allCards = [];
        this.allCards.push(card);
      })
    }
  }

  logPageEvent() {
    console.log(this.pageEvent)
  }
}
