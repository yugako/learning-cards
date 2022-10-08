import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSingleComponent } from './topic-single.component';

describe('TopicSingleComponent', () => {
  let component: TopicSingleComponent;
  let fixture: ComponentFixture<TopicSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
