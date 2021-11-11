import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SingerService} from "../../services/singer.service";

@Component({
  selector: 'app-all-singer',
  templateUrl: './all-singer.component.html',
  styleUrls: ['./all-singer.component.css']
})
export class AllSingerComponent implements OnInit {
  singers?: any;
  isLimit?: number;
  moreData: any;
  limit = 1;
  isMore = true;

  constructor(
    private singerService:SingerService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.singerService.getAll().subscribe(res => {
      this.singers = res;
      this.moreData = this.singers.slice(0, this.limit * 6);
    })
  }

  onMore() {
    this.isLimit = this.singers.length - 6 * this.limit;
    this.limit += 1;
    this.getAll();
    if (this.isLimit > 6) {
      this.isMore = true;
    } else {
      this.isMore = false;
    }
  }
}
