import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { StoreModule } from '@ngrx/store';
import { DataReducer } from 'src/app/store/reducers/data.reducer';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent],
      imports: [HttpClientModule, StoreModule.forRoot({ data: DataReducer })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
