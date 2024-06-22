import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';



@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule,PageTitleComponent,TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {

 newTask="";
 taskList:any[]=[]
  httpService=inject(HttpService);
  ngOnInit(){
    this.getAllTask();
  }
addTask(){
this.httpService.addTask(this.newTask).subscribe(()=>{
  this.newTask=""
  this.getAllTask()
})

}

getAllTask(){
  this.httpService.getAllTask().subscribe((result:any)=>{
this.taskList=result;

  })
}

onComplete(task:any){
  task.completed=true;
console.log('completed'+task)
this.httpService.updateTask(task).subscribe(()=>{

})
}
onImportant(task:any){
  task.important=true;
  console.log('important'+task) 
  this.httpService.updateTask(task).subscribe(()=>{
  
  })
}

}
