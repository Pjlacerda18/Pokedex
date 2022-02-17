import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-escolhido',
  templateUrl: './pokemon-escolhido.component.html',
  styleUrls: ['./pokemon-escolhido.component.css']
})
export class PokemonEscolhidoComponent implements OnInit {
  private _pokeAPI: string = 'https://pokeapi.co/api/v2/pokemon/'
  public pokemonFinalLista: any[] = []
id: number | any;
pokemonFinal: any;
  constructor(private route: ActivatedRoute,
  private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.id = params.id)

this.pokemonFinal = this.http.get(this._pokeAPI + this.id)


console.log(this.pokemonFinal)
  }



pegarPokemonEscolhido() {
;
}
}
