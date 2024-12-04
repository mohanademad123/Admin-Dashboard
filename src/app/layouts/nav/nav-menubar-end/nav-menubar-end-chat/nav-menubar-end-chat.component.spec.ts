import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndChatComponent } from './nav-menubar-end-chat.component';

describe('NavMenubarEndChatComponent', () => {
  let component: NavMenubarEndChatComponent;
  let fixture: ComponentFixture<NavMenubarEndChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
