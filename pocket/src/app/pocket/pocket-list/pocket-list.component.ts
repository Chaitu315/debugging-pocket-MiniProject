import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.css']
})
export class PocketListComponent implements OnInit {

  @Input()
  pocket :any ;
  
  constructor() { }

  ngOnInit(): void{
   
  }
  
}
