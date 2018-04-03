import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { TaskService } from '../../services';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styles: []
})
export class TaskCreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
              private service : TaskService) { }
  @Output() onCreated = new EventEmitter<boolean>();
  @Input() workerId: number;
  task: Task;
  taskForm: FormGroup;
  priorities: SelectItem[];
  

  ngOnInit() {
    this.initForm();
    this.priorities = [
      {label:'High', value:1},
      {label:'Medium', value:2},
      {label:'Normal', value:3},
    ]
  }

  private initForm() {   
    this.taskForm = this.formBuilder.group({
      TaskDesc: [null, Validators.required],
      Deadline:[null, Validators.required],
      Priority: [1, Validators.required]
    });
  }

  onSubmit(){
    this.task = this.taskForm.value;  
    let date = this.taskForm.value.Deadline;
    this.task.Deadline = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    this.task.WorkerId = this.workerId;
    this.service.create(this.task).subscribe(x => {
      this.onCreated.emit(x);
    });
  }
}