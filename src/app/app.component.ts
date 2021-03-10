import { Component, OnInit } from '@angular/core';
import { UidService } from '@service/Uid.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uuid = [];
  constructor(private Uid: UidService) { }
  edit() {
    this.Uid.getID();
    this.uuid.push(this.Uid.uid);
  }
  ngOnInit() {
    this.uuid.push(this.Uid.uid);
  }
}
