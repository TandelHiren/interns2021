import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listner',
  templateUrl: './host-listner.component.html',
  styleUrls: ['./host-listner.component.scss']
})
export class HostListnerComponent implements OnInit {
  scrollValue = 0;
  clickedValue: string;
  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event) {
    this.scrollValue = this.scrollValue + 1;
  }

  @HostListener('document:click', ['$event'])
  onClickEvent(event: MouseEvent) {
    var target = event.target || event.srcElement;
    var id = target['id']
    this.clickedValue = id;
  }
  constructor() { }

  ngOnInit() {
  }

}
