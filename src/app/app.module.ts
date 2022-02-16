import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Menu-Inicial/home/home.component';

import { PokemonsComponent } from './pokemons/pokemons/pokemons.component'
import { HttpClientModule } from '@angular/common/http';
import { PokemonEscolhidoComponent } from './seu-pokemon/pokemon-escolhido/pokemon-escolhido.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    PokemonsComponent,
     PokemonEscolhidoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
