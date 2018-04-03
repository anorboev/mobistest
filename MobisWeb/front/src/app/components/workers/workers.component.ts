import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models";
import { CompanyService, WorkerService } from '../../services';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html'
})
export class WorkersComponent implements OnInit {
  companies: SelectItem[];
  companies2: SelectItem[];
  companyId: number;
  selectedWorker: Worker;
  workers: Worker[];
  filteredWorkers: Worker[];
  createWorkerVisible: boolean;
  editDialogVisible: boolean;
  constructor(private wService: WorkerService,
              private cService: CompanyService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cService.getForDropDown().subscribe(c => {
      this.companies = c;
      this.companies2 = this.companies.map(x => Object.assign({}, x));
      this.companies2[0].label = "Select";
    });
    this.getWorkers();
  }

  getWorkers(){
    this.wService.getAll().subscribe(x => {
      this.workers = x;
      this.filterWorkers();
    });
  }

  filterWorkers(){
    this.filteredWorkers = this.companyId 
      ? this.workers.filter(w => w.CompanyId == this.companyId) 
      : this.workers; 
  }

  showDialog(){
    this.createWorkerVisible = true;
  }

  onEditWorker(){
    this.editDialogVisible = true;
  }

  onEdit(agreed: boolean) {
    if(agreed){
      this.getWorkers();
      this.createWorkerVisible = false;
      this.editDialogVisible = false;
    }
    else
      alert('false')
  }

  onDeleteWorker(){
    this.wService.delete(this.selectedWorker.Id).subscribe(x => {
      if(x)
        this.getWorkers();
      else
        alert('false')
    })
  }

  deleteConfirm() {
    this.confirmationService.confirm({
        message: `Are you sure that you want to delete selected worker?`,
        accept: () => {
            this.onDeleteWorker();
        }
    });
  }

}
