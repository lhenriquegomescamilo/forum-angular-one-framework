import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsShowComponent } from './contacts-show.component';

describe('ContactsShowComponent', () => {
  let component: ContactsShowComponent;
  let fixture: ComponentFixture<ContactsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
