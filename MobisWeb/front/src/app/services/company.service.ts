import { Injectable } from '@angular/core';
import { Company, Worker, Task, CompanyList } from '../models'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class CompanyService {
  constructor(private http: Http) { }
  private baseUrl = "../api/Companies/"; // web api URL

  //company
  getAll() { 
    return this.http.get(this.baseUrl)
                    .map(res => <CompanyList[]>res.json())
                    .catch(this.handleError);    
  }

  create(model: Company){
    return this.http.post(this.baseUrl, JSON.stringify(model), this.getRequestOptions())
              .map(response => <boolean>response.json())
              .catch(this.handleError);
  }
  
  getById(id: number){
    let url = this.baseUrl + id;
    return this.http.get(url)
              .map(response => <Company>response.json())
              .catch(this.handleError);
  }

  edit(id: number, model: Company){
    let url = this.baseUrl + id;
    return this.http.put(url, JSON.stringify(model), this.getRequestOptions())
              .map(response => <Company>response.json())
              .catch(this.handleError);
  }

  delete(id: number){
    let url = this.baseUrl + id;
    return this.http.delete(url)
              .map(response => <Company>response.json())
              .catch(this.handleError);
  }

  getForDropDown(){
    let url = this.baseUrl + '/fordropdown';
    return this.http.get(url)
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
