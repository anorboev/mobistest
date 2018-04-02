import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { TaskService } from '../../services';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styles: []
})
export class TaskEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
              private service : TaskService) { }
  @Output() onEdited = new EventEmitter<boolean>();
  @Input() task: Task;
  taskForm: FormGroup;
  priorities: SelectItem[];

  ngOnInit() {
    this.initForm();
    this.setFormValue();
    this.priorities = [
      {label:'High', value:1},
      {label:'Medium', value:2},
      {label:'Normal', value:3},
    ]
  }

  private initForm() {   
    this.taskForm = this.formBuilder.group({
      Id: [null, Validators.required],
      TaskDesc: [null, Validators.required],
      Deadline: [null, Validators.required],
      Priority: [null, Validators.required],
      WorkerId: [null, Validators.required]
    });
  }

  setFormValue(){         
    this.taskForm.setValue({
      Id: this.task.Id,
      TaskDesc: this.task.TaskDesc,
      Deadline: this.task.Deadline,
      Priority: this.task.Priority,
      WorkerId: this.task.WorkerId
    });
  }

  onSubmit(){
    this.task = this.taskForm.value;     
    let date = this.taskForm.value.Deadline;
    if (date.getMonth) {
      this.task.Deadline = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`; 
    }       
    this.service.edit(this.task).subscribe(x => {
      this.onEdited.emit(x);
    });
  }

}
