import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EmptyRouteComponent } from './empty-route/empty-route.component'

const routes: Routes = [{ path: '**', component: EmptyRouteComponent }]

const baseHREFSingleSPA =
  window['baseHREFSingleSPA' as keyof typeof globalThis & 'baseHREFSingleSPA']

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: baseHREFSingleSPA + '/' }]
})
export class AppRoutingModule {}
