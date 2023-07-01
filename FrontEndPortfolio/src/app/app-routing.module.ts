import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardUsuarioComponent } from './pages/user/dashboard-usuario/dashboard-usuario.component';
import { normalGuard } from './services/normal.guard';
import { adminGuard } from './services/admin.guard';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'admin',
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[adminGuard]
},
{
  path:'userDashboard',
  component:DashboardUsuarioComponent,
  pathMatch:'full',
  canActivate:[normalGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
