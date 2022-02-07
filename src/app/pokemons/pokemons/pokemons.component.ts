import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/services/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon | any;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
     this.pokemonService.getPokemon().subscribe(dados => this.pokemons = dados)
  }

}
