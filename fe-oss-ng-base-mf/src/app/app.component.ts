import { Component } from '@angular/core'

//@ts-ignore
//import { BCIFeParams } from '@bci/fe-params'
//import PACKAGE from '../../package.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //config = BCIFeParams['fe-oss-ng-base-mf']

  /** Ejemplo de importación de imagen, con el fin de que se muestre correctamente en el container de single-spa
   *
   *  import { assetUrl } from '../single-spa/asset-url'
   *
   *  imageUrl = assetUrl('images/bci_logo.png')
   * */
}
