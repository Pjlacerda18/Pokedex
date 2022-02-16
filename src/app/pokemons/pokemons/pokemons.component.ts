import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  take,
  tap,
} from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  private _pokemonAPI: string = 'https://pokeapi.co/api/v2/';
  public pokemonList: any[] =[];
  public form: FormGroup | any;

  pokeField = new FormControl();
  pokeName = new FormControl();
  results: any;
  results$ = this.pokemonList
  total: any;
  abilities: any;

  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  // Inicializador para obter a lista de pokemons
  ngOnInit(): void {
    this.initForm();
    /* this.results$ = this.pokeField.valueChanges
   .pipe(
     map(value => value.trim()),
     filter(value => value.length > 0),
     debounceTime(300),
     distinctUntilChanged(),
     take((1)),
    //tap(value => this.total = value),
     switchMap(res => this.http.get(this.pokemonService.POKE_URL  +'pokemon?offset=0&limit=1200')
    ), tap((res: any) => this.total = res.count),
     map(res => res.results),
   )*/
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(null),
    });

  this.form
      .get('name')
      .valueChanges.pipe(
        map((data: any) => data.trim()),
        tap((data: any) => (data.length < 2 ? (this.pokemonList) : null)),
        filter((data: any) => data.length >= 2),
        debounceTime(900),
        distinctUntilChanged()
      )
      .subscribe((data: any) => {
        this.getPokemonList(data);
      });
      console.log(this.pokemonList)
  }

  private getPokemonList(name: string, offset: number = 0): void {
    let limit = 100;
    const parameters: string = `pokemon?limit=${limit}&offset=${
      limit * offset
    }`;
    this.http
      .get(`${this._pokemonAPI}${parameters}`)
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data['results'].length == 0) {
          return;
        }
        this.pokemonList = this.getPokemonListBy(name, data['results']);
        if (this.pokemonList.length == 0) {
          this.getPokemonList(name, ++offset);
        }

      });
  }

  private getPokemonListBy(name: string, list: any[]): any[] {
    let size = name.length;
    return list.filter((pkm) => pkm.name.substring(0, size) == name);
  }

  //Listar pokemons com o Click, não creio que seja mais necessário!
  listPokemons() {
    //this.pokemonService.getPokemon()
    //console.log(this.pokemonService.getPokemon())
  }

  //Listar as habilidades do Pokemon, não sei o que está retornando não estou conseguindo fazer o bind!
  listAbilities(name:any) {

  this.router.navigate(['/pokemon-escolhido'])
  }


}
