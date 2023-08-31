import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs'
import { singleSpaPropsSubject } from '../single-spa/single-spa-props'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PropsService {
  subscriptionShellProps: Subscription = new Subscription()
  subscriptionAuthProps: Subscription = new Subscription()
  public props: any

  constructor(private router: Router) {
    this.subscriptionShellProps = singleSpaPropsSubject.subscribe(
      (props: any) => {
        this.props = props
      }
    )
  }

  getProps() {
    return this.props
  }
}
