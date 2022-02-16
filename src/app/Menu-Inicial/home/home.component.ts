//import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Usuario} from './usuario';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

usuario: Usuario = new Usuario;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//Falta a criação do AuthGuard para logar Somenete com o preenchimento do nome!
openPokedex(){
 //this.navCtrl.push(SuaPokedexComponent, {}, {animate: true})
this.router.navigate(['/pokemons'])
}


}
