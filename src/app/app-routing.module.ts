import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent}// cada objeto é uma pagina que sera carregada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
