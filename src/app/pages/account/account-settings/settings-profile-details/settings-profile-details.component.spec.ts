import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProfileDetailsComponent } from './settings-profile-details.component';

describe('SettingsProfileDetailsComponent', () => {
  let component: SettingsProfileDetailsComponent;
  let fixture: ComponentFixture<SettingsProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProfileDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
