import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PocketService } from '../pocket.service';

@Component({
  selector: 'app-pocket-card',
  templateUrl: './pocket-card.component.html',
  styleUrls: ['./pocket-card.component.css']
})
export class PocketCardComponent implements OnInit {

  @Input()
  metadata: any;

  @Output()
  outputData = new EventEmitter();

  constructor(private pocketService: PocketService) { }

  ngOnInit(): void {
    this.metadata = {
      url : this.metadata.url,
      image : this.metadata.image,
      title : this.metadata.title,
      description : this.metadata.description,
      id :this.metadata.id
    }  
  }

  deleteData()
  {
    this.pocketService.delete(this.metadata.id).subscribe();
  }

}
