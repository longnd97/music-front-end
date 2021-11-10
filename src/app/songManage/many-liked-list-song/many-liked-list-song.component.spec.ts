import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyLikedListSongComponent } from './many-liked-list-song.component';

describe('ManyLikedListSongComponent', () => {
  let component: ManyLikedListSongComponent;
  let fixture: ComponentFixture<ManyLikedListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyLikedListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyLikedListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
