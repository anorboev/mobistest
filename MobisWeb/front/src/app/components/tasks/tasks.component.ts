import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../models";
import { TaskService } from '../../services';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  priority: SelectItem[];
  selectedTask: Task;
  tasks: Task[];
  @Input() workerId: number;
  @Input() workerName: string;
  createDialogVisible: boolean;
  editDialogVisible: boolean;
  constructor(private tServise: TaskService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.tServise.getByWorker(this.workerId).subscribe(task => this.tasks = task);
  }

  onCreateTask(){
    this.createDialogVisible = true;
  }

  onEditTask(){
    this.editDialogVisible = true;
  }

  onEdit(agreed: boolean) {
    if(agreed){
      this.getTasks();
      this.createDialogVisible = false;
      this.editDialogVisible = false;
    }
    else
      alert('false')
  }

  onDeleteTask(){
    this.tServise.delete(this.selectedTask.Id).subscribe(x => {
      if(x)
        this.getTasks();
      else
        alert('false')
    })
  }

  deleteConfirm() {
    this.confirmationService.confirm({
        message: `Are you sure that you want to delete selected task?`,
        accept: () => {
            this.onDeleteTask();
        }
    });
  }
}
