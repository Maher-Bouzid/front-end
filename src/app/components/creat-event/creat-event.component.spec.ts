import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEventComponent } from './creat-event.component';

describe('CreateEventComponent', () => {
  let component: CreatEventComponent;
  let fixture: ComponentFixture<CreatEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
