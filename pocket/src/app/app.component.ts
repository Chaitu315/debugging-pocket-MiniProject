import { Component, OnInit } from '@angular/core';
import { PocketService } from './pocket/pocket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  pocket: any = [];
  targetUrl: string = "";

  constructor(private pocketService: PocketService) {
  }

  ngOnInit() 
  {
    this.pocketService.getData().subscribe((response:any) =>
    {
      this.pocket= response;
    })
  }

  add()
  {
    console.log("add method executed");
    this.pocketService.scrape({ target: this.targetUrl }).subscribe(this.next,this.error)
  }
 
  next = (data:any) =>{
    console.log("inside next");
    this.pocketService.postData(data).subscribe(()=>{
      console.log("subscribing observable of postData");
      this.pocketService.getData().subscribe((response:any) =>
      {
        console.log("subscribing observable of getdata");
        this.pocket= response;
        this.targetUrl = '';
      })

    });
  }

  error = (err:string) => {
    console.log(err);
  }

}