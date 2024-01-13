import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchNamePlaqueComponent } from './church-name-plaque.component';

describe('ChurchNamePlaqueComponent', () => {
  let component: ChurchNamePlaqueComponent;
  let fixture: ComponentFixture<ChurchNamePlaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchNamePlaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChurchNamePlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
