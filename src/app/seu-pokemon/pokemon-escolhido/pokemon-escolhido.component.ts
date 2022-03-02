import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-escolhido',
  templateUrl: './pokemon-escolhido.component.html',
  styleUrls: ['./pokemon-escolhido.component.css'],
})

export class PokemonEscolhidoComponent implements OnInit {
  private _pokeAPI: string = 'https://pokeapi.co/api/v2/pokemon/';
  id: number | any;
  pokemonFinal: any;
  pokemon: any;
  habilidades: any[] = [];
  movimentos: any[] = [];
  pokemonHabilidades: any[] = [
    {
      ability: {
        name: '',
        url: '',
      },
    },];
  pokemonPeso: number | any;
  pokemonAltura: number | any;
  pokemonTipo: any;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => (this.id = params.id));


    this.pegarPokemon();
  }


  pegarPokemon() {
    this.pokemonService
      .getPokemon(this.id)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.pokemon = data;
        this.pegarHabilidades();
        this.pegarMovimentosPokemon();
      });

    /*this.pegarMovimentosPokemon();
    this.pegarTipoPokemon();
    this.pegarPesoPokemon();
    this.pegarAlturaPokemon();*/
  }

  pegarMovimentosPokemon() {
    this.movimentos = [];
    this.pokemon.moves.filter((move:any) => this.pokemonService.getHabilidade(move.move.url).subscribe((data:any)=> this.movimentos.push(data)))
console.log(this.movimentos)
  }



  public pegarHabilidades(): void {
    this.habilidades = [];
    this.pokemon.abilities.map((a: any) =>
      this.pokemonService
        .getHabilidade(a.ability.url)
        .subscribe((data: any) => this.habilidades.push(data))
    );
  }

  public pegarDescricaoHabilidade(habilidade: any, idioma: string = 'en'): string {
    let habilidadeFiltradaPorIdioma = habilidade.effect_entries.find((e: any) => e.language.name == idioma);
    return habilidadeFiltradaPorIdioma ? habilidadeFiltradaPorIdioma.effect : 'Descricão não identificada no idioma solicitado';
}
public pegarDescricaoMovimento(move:any, idioma: string ='en') {
let movimentoFiltradoPorIdioma = move.effect_entries.find((e:any) => e.language.name = idioma);
return movimentoFiltradoPorIdioma ? movimentoFiltradoPorIdioma.effect : 'Descricão não identificada no idioma solicitado';
}
}
