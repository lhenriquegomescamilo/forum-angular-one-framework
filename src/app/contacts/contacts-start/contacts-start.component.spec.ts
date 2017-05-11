import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsStartComponent } from './contacts-start.component';

describe('ContactsStartComponent', () => {
  let component: ContactsStartComponent;
  let fixture: ComponentFixture<ContactsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
