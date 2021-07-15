import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private isLoggedIn = new BehaviorSubject(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private cfr: ComponentFactoryResolver) { }

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { GuestCardComponentComponent } = await import('./guest-card-component/guest-card-component.component');

    const { UserCardComponentComponent } = await import('./user-card-component/user-card-component.component');

    vcr.clear();
    let component: any = isLoggedIn ? UserCardComponentComponent : GuestCardComponentComponent;

    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component))
  }
}

