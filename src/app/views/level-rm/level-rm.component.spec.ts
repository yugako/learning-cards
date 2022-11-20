import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelRmComponent } from './level-rm.component';

describe('LevelRmComponent', () => {
  let component: LevelRmComponent;
  let fixture: ComponentFixture<LevelRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelRmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
