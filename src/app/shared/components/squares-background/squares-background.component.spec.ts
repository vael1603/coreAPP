import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresBackgroundComponent } from './squares-background.component';

describe('SquaresBackgroundComponent', () => {
  let component: SquaresBackgroundComponent;
  let fixture: ComponentFixture<SquaresBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquaresBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquaresBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
