import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySongSearchComponent } from './play-song-search.component';

describe('PlaySongSearchComponent', () => {
  let component: PlaySongSearchComponent;
  let fixture: ComponentFixture<PlaySongSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaySongSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
