import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { WorkerService } from '../../services';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styles: []
})
export class WorkerCreateComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, 
              private service : WorkerService) { }
  @Output() onCreated = new EventEmitter<boolean>();
  @Input() companies: SelectItem[];
  worker: Worker;
  workerForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {   
    this.workerForm = this.formBuilder.group({
      FullName: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Address: [null, Validators.required],
      CompanyId: [null, Validators.required]
    });
  }

  onSubmit(){
    this.worker = this.workerForm.value;
    console.log(this.worker)

    this.service.create(this.worker).subscribe(x => {
      this.onCreated.emit(x);
    });
  }

}
