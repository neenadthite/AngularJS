import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route11Component } from './route1/route11/route11.component';
import { Route12Component } from './route1/route12/route12.component';
import { Route2Component } from './route2/route2.component';
import { Route21Component } from './route2/route21/route21.component';
import { Route22Component } from './route2/route22/route22.component';

const routes: Routes = [
  { path: '', redirectTo: '/route', pathMatch: 'full' },
  { path: 'route1', component: Route1Component, children: [
    { path: 'route11', component: Route11Component },
    { path: 'route12', component: Route12Component }
  ] },
  { path: 'route2', component: Route2Component, children: [
    { path: 'route21', component: Route21Component },
    { path: 'route22', component: Route22Component }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
