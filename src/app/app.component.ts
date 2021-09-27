import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { AppState,selectDataState} from "./store/app.state";
import { Store } from '@ngrx/store';
import { GetUserData } from './store/actions/data.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USERDATA';
  info:any;
  getAllData: Observable<any>
  constructor(
    private store: Store<AppState>,
    private userDataservice:UserDataService
    ){
      this.getAllData = this.store.select(selectDataState)
    }
  ngOnInit(){
    // this.getAllData?.subscribe(state => {
    //   console.log('state => ', state)
    // })
    this.getUserInfo()
    // setTimeout(()=>{
    //   this.getAllData?.subscribe((state)=>{
    //     console.warn('state',state)
    //   })
    // },1000)
    
  }
  getUserInfo(){
    this.store.dispatch(new GetUserData())
    // this.userDataservice.getUserData().subscribe(
    //   (res: any) =>{
    //     this.info=res
    //   })
  }
}