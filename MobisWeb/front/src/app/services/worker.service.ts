import { Injectable } from '@angular/core';
import { Worker } from '../models'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class WorkerService {
  constructor(private http: Http) { }
  private baseUrl = "../api/workers/"; // web api URL

  //company
  getAll() { 
    return this.http.get(this.baseUrl)
                    .map(res => <Worker[]>res.json())
                    .catch(this.handleError);    
  }

  create(model: Worker){
    return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
              .map(response => <boolean>response.json())
              .catch(this.handleError);
  }
  
  getById(id: number){
    let url = this.baseUrl + id;
    return this.http.get(this.baseUrl + id)
              .map(response => <Worker>response.json())
              .catch(this.handleError);
  }

  edit(model: Worker){
    return this.http.put(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
              .map(response => <Worker>response.json())
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
