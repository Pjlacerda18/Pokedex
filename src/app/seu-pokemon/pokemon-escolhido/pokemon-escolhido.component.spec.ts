import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEscolhidoComponent } from './pokemon-escolhido.component';

describe('PokemonEscolhidoComponent', () => {
  let component: PokemonEscolhidoComponent;
  let fixture: ComponentFixture<PokemonEscolhidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonEscolhidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEscolhidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
