import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './Menu-Inicial/home/home.component';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';


const routes: Routes = [
   {path: '', component: HomeComponent },
   {path: 'home', component:HomeComponent },
  
   {path: 'pokemons', component: PokemonsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
