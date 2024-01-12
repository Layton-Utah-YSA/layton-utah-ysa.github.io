import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardProgramComponent } from './ward-program.component';

describe('WardProgramComponent', () => {
  let component: WardProgramComponent;
  let fixture: ComponentFixture<WardProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WardProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WardProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
