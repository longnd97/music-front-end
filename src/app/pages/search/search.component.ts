import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() clickSearch = new EventEmitter<string>()
  value?: string;
  songs?: any;
  key?: string;
  otherMessage?: Subscription;


  constructor(private songService: SongService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
  ) {
  }

  ngOnInit(): void {

  }

  search() {
    this.clickSearch.emit(this.value);
    // @ts-ignore
    if (this.value){
      this.dataService.changeMessage(this.value);
      console.log(this.value)
      this.router.navigate(['songs/search/'+this.value])
    }else {
      this.value="";
      this.dataService.changeMessage(this.value);
      window.location.reload();
    }

  }

  back() {
    this.value = '';
    this.songs = [];
  }


}
