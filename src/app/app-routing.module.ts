import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UsersRegistratedComponent } from './users/usersRegistrated.component';

import { NgModel } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UsersComponent },
  { path: 'user-registrated', component: UsersRegistratedComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
