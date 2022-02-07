import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPokedexComponent } from './sua-pokedex.component';

describe('SuaPokedexComponent', () => {
  let component: SuaPokedexComponent;
  let fixture: ComponentFixture<SuaPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
