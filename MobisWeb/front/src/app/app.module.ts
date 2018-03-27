import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompaniesComponent } from './componets/companies/companies.component';
import { WorkersComponent } from './componets/workers/workers.component';
import { TasksComponent } from './componets/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    WorkersComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
