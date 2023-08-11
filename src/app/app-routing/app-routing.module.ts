import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ProceduresPageComponent } from '../views/procedures/procedures-page/procedures-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':icao', component: ProceduresPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
