import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDataService } from "src/app/services/user-data.service";
import {
  DataActionTypes,
  GetUserData,
  GetUserDataSuccess,
  GetUserDataFailure
} from '../actions/data.actions'
@Injectable()
export class dataEffects {
  constructor(
    private actions: Actions,
    private userDataService: UserDataService
    ) { }

  @Effect()
  GetUserData: Observable<any> = this.actions.pipe(
    ofType(DataActionTypes.GETDATA),
    switchMap((action: any) => {
      return this.userDataService.getUserData().pipe(
        map((data) => {
          console.log("effectData =>",data)
          return new GetUserDataSuccess(data)
        }),
        catchError((errResp) => {
          return of(new GetUserDataFailure({ error: errResp }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  GetUserDataSuccess: Observable<any> = this.actions.pipe(
    ofType(DataActionTypes.GETDATA_SUCCESS)
  );

  @Effect({ dispatch: false })
  GetUserDataFailure: Observable<any> = this.actions.pipe(
    ofType(DataActionTypes.GETDATA_FAILURE)
  );
}


// @Effect()
//     GetUserData: Observable<any> = this.actions
//     .pipe(ofType(DataActionTypes.GETDATA))
//     .map((action: GetUserData) => action.payload)
//     .switchMap((_payload: any) => {
//       return this.userDataService.getUserData()
//     });