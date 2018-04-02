import { Injectable } from '@angular/core';
import { Task } from '../models'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TaskService {

  constructor(private http: Http) { }
  private baseUrl = "../api/tasks/"; // web api URL

  getByWorker(id: number) { 
    return this.http.get(this.baseUrl + "GetByWorker/" + id)
                    .map(res => <Task[]>res.json())
                    .catch(this.handleError);    
  }

  create(model: Task){
    return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
              .map(response => <boolean>response.json())
              .catch(this.handleError);
  }
  
  getById(id: number){
    let url = this.baseUrl + id;
    return this.http.get(this.baseUrl + id)
              .map(response => <Task>response.json())
              .catch(this.handleError);
  }

  edit(model: Task){
    return this.http.put(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
              .map(response => <Task>response.json())
              .catch(this.handleError);
  }

  delete(id: number){
    let url = this.baseUrl + id;
    return this.http.delete(this.baseUrl + id)
              .map(response => response.json())
              .catch(this.handleError);
  }

  

  private getRequestOptions(){
    return new RequestOptions({
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });
  }

  private handleError(error: Response) {
    // output errors to the console.
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
  
}