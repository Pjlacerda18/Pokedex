import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-escolhido',
  templateUrl: './pokemon-escolhido.component.html',
  styleUrls: ['./pokemon-escolhido.component.css']
})
export class PokemonEscolhidoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


pegarPokemonEscolhido() {

}
}
