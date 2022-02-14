import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, take, tap } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

pokeField = new FormControl();
pokeName = new FormControl();
  results : [] | any;
  results$: [] | any;
  total: any;
  abilities: any;


  constructor(private pokemonService : PokemonService,
  private http: HttpClient) { }

// Inicializador para obter a lista de pokemons
  ngOnInit(): void {
     this.results$ = this.pokeField.valueChanges
   .pipe(
     map(value => value.trim()),
     filter(value => value.length > 2),
     debounceTime(300),
     distinctUntilChanged(),
     take((1)),
    //tap(value => this.total = value),
     switchMap(res => this.http.get(this.pokemonService.POKE_URL  +'pokemon?offset=0&limit=1200')
    ), tap((res: any) => this.total = res.count),
     map(res => res.results),
   )
  }

//Listar pokemons com o Click, não creio que seja mais necessário!
listPokemons() {
  let value = this.pokeField.value;
  if (value && (value = value.trim()) !=='') {
    this.results$ = this.pokemonService.getPokemon().pipe(take((1)))
    .subscribe(dados => this.results$ = dados)
    return

  }
}

//Listar as habilidades do Pokemon, não sei o que está retornando não estu conseguindo fazer o bind!
listAbilities(name: any) {
  let abilitiesName = this.results$.res.name;
  this.abilities = (this.pokemonService.POKE_URL + 'abilities/' + name);
  return this.abilities
}


}
