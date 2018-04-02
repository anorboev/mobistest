import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { WorkersComponent } from './components/workers/workers.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { 
  DataTableModule,
  InputTextModule,
  InputMaskModule,
  CalendarModule,
  DropdownModule,
  ButtonModule,
  DialogModule,
  ConfirmDialogModule,
  ConfirmationService
  
} from 'primeng/primeng'
import { AppRoutingModule } from './app.routing';
import { CompanyCreateComponent } from './components/companies/company-create.component';
import { CompanyEditComponent } from './components/companies/company-edit.component';
import { CompanyService, TaskService, WorkerService } from './services';
import { WorkerCreateComponent } from './components/workers/worker-create.component';
import { WorkerEditComponent } from './components/workers/worker-edit.component';
import { TaskCreateComponent } from './components/tasks/task-create.component';
import { TaskEditComponent } from './components/tasks/task-edit.component';
import { FormGroupComponent } from './helpers/form-group.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    WorkersComponent,
    TasksComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    WorkerCreateComponent,
    WorkerEditComponent,
    TaskCreateComponent,
    TaskEditComponent,
    FormGroupComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableModule,
    DataTableModule, 
    ConfirmDialogModule, 
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    CompanyService,
    WorkerService,
    TaskService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
