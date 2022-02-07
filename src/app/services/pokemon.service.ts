import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../assets/dados/pokemon';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

private readonly API = `${environment.API}pokemons`

  constructor(private http: HttpClient,
  ) { }

  getPokemon() {
    return this.http.get<Pokemon>(this.API).pipe(
      tap(console.log),
      map(response => response)
    )
  }
}
