import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Menu-Inicial/home/home.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';
import { PokemonEscolhidoComponent } from './seu-pokemon/pokemon-escolhido/pokemon-escolhido.component';


const routes: Routes = [
   {path: '', component: HomeComponent },
   {path: 'home', component:HomeComponent },
   {path: 'pokemons', component: PokemonsComponent },
   {path: 'pokemon-escolhido', component: PokemonEscolhidoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
