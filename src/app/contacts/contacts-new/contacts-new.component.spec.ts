import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNewComponent } from './contacts-new.component';

describe('ContactsNewComponent', () => {
  let component: ContactsNewComponent;
  let fixture: ComponentFixture<ContactsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
