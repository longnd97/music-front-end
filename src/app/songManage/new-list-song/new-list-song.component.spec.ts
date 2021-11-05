import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListSongComponent } from './new-list-song.component';

describe('NewListSongComponent', () => {
  let component: NewListSongComponent;
  let fixture: ComponentFixture<NewListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
