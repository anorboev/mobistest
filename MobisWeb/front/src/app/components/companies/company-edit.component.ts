import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Company } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CompanyService } from '../../services';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styles: []
})
export class CompanyEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, 
              private service : CompanyService) { }
  @Output() onEdited = new EventEmitter<boolean>();
  @Input() companyId: number;
  company: Company;
  companyForm: FormGroup;
  ngOnInit() {
    this.service.getById(this.companyId).subscribe(x=>{
      this.company = x;
      this.setFormValue();
    })
    this.initForm();
  }

  private initForm() {   
    this.companyForm = this.formBuilder.group({
      Id: [null, Validators.required],
      Name: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Address: ['']
    });
  }

  setFormValue(){         
      this.companyForm.setValue({
        Id: this.company.Id,
        Name: this.company.Name,
        PhoneNumber: this.company.PhoneNumber,
        Address: this.company.Address
      });
  }

  onSubmit(){
    this.company = this.companyForm.value;
    this.service.edit(this.companyId, this.company).subscribe(x => {
      this.onEdited.emit(x);
    });
  }
}
