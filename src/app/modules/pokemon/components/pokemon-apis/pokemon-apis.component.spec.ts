import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonApisComponent } from './pokemon-apis.component';

describe('PokemonApisComponent', () => {
  let component: PokemonApisComponent;
  let fixture: ComponentFixture<PokemonApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
