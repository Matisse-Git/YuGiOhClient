import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  apiLink: string = "https://api.pokemontcg.io/v1/cards"

  constructor(private http: HttpClient) { }

  getAllCards(){
    return this.http.get<PokemonResults>(this.apiLink)
  }
}

export interface PokemonResults{
  cards: any[];
}
