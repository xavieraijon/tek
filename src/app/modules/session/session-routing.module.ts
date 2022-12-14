import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionPageComponent } from './pages/session-page/session-page.component';

const routes: Routes = [{ path: ':id', component: SessionPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
