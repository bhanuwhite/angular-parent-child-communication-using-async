import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../shared/services/app.service';
import { User } from '../../shared/models/data.model';
import { Store } from '@ngrx/store';
import { AddData } from 'src/app/store/actions/data.actions';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private appService: AppService, private store: Store<{ data: User[] }>) { }
  data$: Observable<User[]>;
  /**
   * Initializing life cycle of a component
   */
  ngOnInit() {
    this.getUsersData()
  }

  getUsersData() {
    this.store.select('data').subscribe(data => {
      if (data.length == 0) {
        /**
        * Getting data from API
        */
        this.appService.getData().subscribe(users => {
          this.store.dispatch(new AddData(users));
          this.data$ = this.store.select('data');
        })
      }
      else {
        this.data$ = this.store.select('data');
      }
    })
  }

}
