import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { ApiService } from '../api.service';

@Component({
  selector: 'all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  allCards: any[] = [];

  //paginator Options
  pageSize: number = 1;
  length: number = 3;
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: this.pageSize,
    previousPageIndex: 1,
    length: this.length 
  };

  constructor(
    private api: ApiService) { }

  ngOnInit(): void {
    this.getAllCards(0, this.pageSize);
  }

  getAllCards(pageIndex: number, length: number){
    this.api.getAllCards(0, 99999).subscribe(cards => {
      this.length = cards.length;
    })
    this.api.getAllCards(pageIndex, length).subscribe(cards => {
      this.allCards = cards;
    })
  }

  logPageEvent(){
    console.log(this.pageEvent)
  }
}
