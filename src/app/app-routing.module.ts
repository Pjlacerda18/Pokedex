import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './Menu-Inicial/home/home.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';
import { SuaPokedexComponent } from './sua-pokedex/sua-pokedex/sua-pokedex.component';

const routes: Routes = [
   {path: '', component: HomeComponent },
   {path: 'home', component:HomeComponent },
   {path: 'sua-pokedex', component: SuaPokedexComponent },
   {path: 'pokemons', component: PokemonsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
