import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubsHttpTestComponent } from './hubs-http-test.component';

describe('HubsHttpTestComponent', () => {
  let component: HubsHttpTestComponent;
  let fixture: ComponentFixture<HubsHttpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubsHttpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubsHttpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
