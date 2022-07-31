import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-gaurd.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
  ]},
  
  {
    path: 'servers', canActivateChild: [AuthGuard] , component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGaurd] },
      { path: ':id', component: ServerComponent, resolve:{server: ServerResolver} },
      
    ]
  },
//   {
//     path: 'not-found', component: PageNotFoundComponent
//     },
  {
    path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'}
  },
//   {
//     path: '**', redirectTo: '/not-found'
//   }
  {
    path: '**', redirectTo: '/not-found'
  }
  
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}