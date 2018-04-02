import { Component, OnInit } from '@angular/core';
import { CompanyList } from "../../models";
import { CompanyService } from '../../services';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styles: []
})
export class CompaniesComponent implements OnInit {

  selectedCompany: CompanyList;
  companies: CompanyList[];
  dialogVisible: boolean;
  editDialogVisible: boolean;
  constructor(private cService: CompanyService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.cService.getAll().subscribe(x => {
      this.companies = x;
    });
  }

  showDialog(){
    this.dialogVisible = true;
  }

  onEditCompany(){
    this.editDialogVisible = true;
  }

  onEdit(agreed: boolean) {
    if(agreed){
      this.getCompanies();
      this.dialogVisible = false;
      this.editDialogVisible = false;
    }
    else
      alert('false')
  }

  onDeleteCompany(id){
    this.cService.delete(id).subscribe(x => {
      if(x)
        this.getCompanies();
      else
        alert('false')
    })
  }

  deleteConfirm() {
    this.confirmationService.confirm({
        message: `Are you sure that you want to delete company named ${this.selectedCompany.Name}?`,
        accept: () => {
            this.onDeleteCompany(this.selectedCompany.Id);
        }
    });
  }

}
