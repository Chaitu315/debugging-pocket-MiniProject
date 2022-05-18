import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  scraperApi: string = 'http://localhost:9090/scrape';

  jsondata: string = 'http://localhost:3000/pocket';
 
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(id:any)
  {
    const url = `${this.jsondata}/${id}`; 
    return this.httpClient.delete(url) 
  }

  scrape(data: any) {
    console.log("scrap method executed");
    
    return this.httpClient.post<any>(this.scraperApi, data);
  }

  postData(urlData:any) 
  {
    console.log("inside postData method");
    const observable = this.httpClient.post<any>(this.jsondata, urlData);
    return observable; 
  }

  getData()
  {
    console.log("inside getData Method");
    return this.httpClient.get<any>(this.jsondata);
  }

  delete(id:any)
  {
    const url = `${this.jsondata}/${id}`; 
    window.location.reload();
    return this.httpClient.delete(url) 
  }
  
}
