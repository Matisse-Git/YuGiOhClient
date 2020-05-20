import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemonCardsComponent } from './all-pokemon-cards.component';

describe('AllPokemonCardsComponent', () => {
  let component: AllPokemonCardsComponent;
  let fixture: ComponentFixture<AllPokemonCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPokemonCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPokemonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
