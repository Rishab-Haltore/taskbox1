import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoIntegrateComponent } from './sso-integrate.component';

describe('SsoIntegrateComponent', () => {
  let component: SsoIntegrateComponent;
  let fixture: ComponentFixture<SsoIntegrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsoIntegrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsoIntegrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
