import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Company } from '../../models';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CompanyService } from '../../services';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styles: []
})
export class CompanyCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private service : CompanyService) { }
  @Output() onCreated = new EventEmitter<boolean>();
  company: Company;
  companyForm: FormGroup;
  ngOnInit() {
    this.initForm();
  }

  private initForm() {   
    this.companyForm = this.formBuilder.group({
      Name: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Address: ['']
    });
  }

  onSubmit(){
    this.company = this.companyForm.value;
    this.service.create(this.company).subscribe(x => {
      this.onCreated.emit(x);
    });
  }

}
