import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

//POKE_URL foi feita para testes fora do services no momento sendo usada!
private readonly API = `https://pokeapi.co/api/v2/`
POKE_URL='https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient,
  ) { }

//Serviço generico para pegar a lista de pokemons, no momento não está sendo usada
  getPokemon() {
    return this.http.get<any>(this.API + 'pokemon?offset=0&limit=1118').pipe(
      tap(console.log),
      map(response => response),


    )
  }

  //Serviço genérico para pegar as habilidades dos pokemons, acho que ainda não será usado
  pokeAbilities() {
    return this.http.get<any>(this.API + 'abilities')
    .pipe(
      map(response=> response))
  }

}
