import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListSongComponent } from './my-list-song.component';

describe('MyListSongComponent', () => {
  let component: MyListSongComponent;
  let fixture: ComponentFixture<MyListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
