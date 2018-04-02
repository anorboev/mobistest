import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { WorkerService } from '../../services';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styles: []
})
export class WorkerEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
              private service : WorkerService) { }
  @Output() onEdited = new EventEmitter<boolean>();
  @Input() companies: SelectItem[];
  @Input() worker: Worker;
  workerForm: FormGroup;

  ngOnInit() {
    console.log(this.worker);
    this.initForm();
    this.setFormValue();
  }

  private initForm() {   
    this.workerForm = this.formBuilder.group({
      Id: [null, Validators.required],
      FullName: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Address: [null, Validators.required],
      CompanyId: [null, Validators.required]
    });
  }

  setFormValue(){         
    this.workerForm.setValue({
      Id: this.worker.Id,
      FullName: this.worker.FullName,
      PhoneNumber: this.worker.PhoneNumber,
      Address: this.worker.Address,
      CompanyId: this.worker.CompanyId
    });
}

  onSubmit(){
    this.worker = this.workerForm.value;
    console.log(this.worker)

    this.service.edit(this.worker).subscribe(x => {
      this.onEdited.emit(x);
    });
  }

}
