import { Component, OnInit, ViewChild } from '@angular/core';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { ProfileHostDirective } from '../profile-host.directive';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(isLoggedIn =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }


}
