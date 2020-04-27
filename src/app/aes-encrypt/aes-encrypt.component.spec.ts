import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AesEncryptComponent } from './aes-encrypt.component';

describe('AesEncryptComponent', () => {
  let component: AesEncryptComponent;
  let fixture: ComponentFixture<AesEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AesEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AesEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
