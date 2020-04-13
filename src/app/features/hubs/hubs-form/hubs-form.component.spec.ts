import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubsFormComponent } from './hubs-form.component';

describe('HubsFormComponent', () => {
  let component: HubsFormComponent;
  let fixture: ComponentFixture<HubsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
