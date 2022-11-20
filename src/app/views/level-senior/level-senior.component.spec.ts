import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSeniorComponent } from './level-senior.component';

describe('LevelSeniorComponent', () => {
  let component: LevelSeniorComponent;
  let fixture: ComponentFixture<LevelSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
