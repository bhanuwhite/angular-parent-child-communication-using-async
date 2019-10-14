import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private appService: AppService) { }
  data: Observable<any>;
  /**
   * Initializing life cycle of a component
   */
  ngOnInit() {
    this.data = this.appService.getData();
  }

}
