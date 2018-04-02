import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { WorkersComponent } from './components/workers/workers.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'company',
    pathMatch: 'full',
  },
  {
    path: 'company',
    component: CompaniesComponent,
    data: {
      title: 'Companies'
    }
  },
  {
    path: 'worker',
    component: WorkersComponent,
    data: {
      title: 'Workers'
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
