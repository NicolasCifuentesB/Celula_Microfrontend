import { Component, NgZone } from '@angular/core';
import { Subscription } from 'rxjs'
import { singleSpaPropsSubject } from '../single-spa/single-spa-props'
import { PropsService } from 'src/services/props.service'

@Component({
  selector: 'app0-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptionShellProps: Subscription = new Subscription()
  title = 'fe-angular-page';
  funcionUtilitario: any;
  setValor: any;
  publishLib: any;
  subscribeLib: any;
  valorTexto: string = "";
  valorSet: string = "";
  
  constructor(private propsService: PropsService, private readonly zone: NgZone) {}

  ngOnInit(): void {
    this.getLib()
  }

  async getLib() {
    let props = await this.propsService.getProps()

    this.funcionUtilitario = props.funcionUtilitario
    this.setValor = props.setValor
    this.publishLib = props.publishLib
    this.subscribeLib = props.subscribeLib
    this.subscribeLib("funcionPubSub", (msg: string, data: string) => { 
      this.zone.run(() => {
        this.valorTexto = data;  
      });
    })
  }

  clickButton() {
    this.valorTexto = this.funcionUtilitario()
  }

  clickSet() {
    this.setValor(this.valorSet);
  }
}