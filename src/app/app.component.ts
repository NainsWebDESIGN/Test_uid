import { Component, OnInit } from '@angular/core';
import { UidService } from '@service/Uid.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private Uid: UidService) { }
  ngOnInit() {
    console.log(this.Uid.uid);
  }
}
