import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsActionNeededComponent } from './widgets-action-needed.component';

describe('WidgetsActionNeededComponent', () => {
  let component: WidgetsActionNeededComponent;
  let fixture: ComponentFixture<WidgetsActionNeededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsActionNeededComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsActionNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
