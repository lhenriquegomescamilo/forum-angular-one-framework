import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBaseComponent } from './contact-base.component';

describe('ContactBaseComponent', () => {
  let component: ContactBaseComponent;
  let fixture: ComponentFixture<ContactBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
