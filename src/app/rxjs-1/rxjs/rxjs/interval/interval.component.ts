import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  public videoUpload:any;
  public videoSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    // const broadCastVideos = interval(1000);
    const broadCastVideos = timer(5000,1000);
    broadCastVideos.subscribe((res:any)=>{
      this.videoUpload = 'Data'+res;
      if(res>=10){
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
