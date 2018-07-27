import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionsHomeComponent } from './detections-home.component';

describe('DetectionsHomeComponent', () => {
  let component: DetectionsHomeComponent;
  let fixture: ComponentFixture<DetectionsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
