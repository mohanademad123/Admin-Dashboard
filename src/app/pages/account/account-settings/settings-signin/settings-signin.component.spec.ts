import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSigninComponent } from './settings-signin.component';

describe('SettingsSigninComponent', () => {
  let component: SettingsSigninComponent;
  let fixture: ComponentFixture<SettingsSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
