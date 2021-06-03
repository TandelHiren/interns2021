import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  public isShow: boolean = true;
  public flag: boolean = true;
  public fetchData = [
    {
      "title": "saurabh",
      "description": "dd",
      "tagline": "tt",
      "date": "dd"
    },
    {
      "title": "aman",
      "description": "dd",
      "tagline": "tt",
      "date": "dd"
    },
    {
      "title": "jessica",
      "description": "dd",
      "tagline": "tt",
      "date": "dd"
    },
    {
      "title": "rosh",
      "description": "dd",
      "tagline": "tt",
      "date": "dd"
    }];
  constructor() { }

  ngOnInit() {
  }
  public btnClick() {
    alert('button click');
  }
}
