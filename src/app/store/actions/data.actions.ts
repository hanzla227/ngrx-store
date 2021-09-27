import { Action } from "@ngrx/store";

export enum DataActionTypes {
    GETDATA = '[DATA] -  Get Userdata',
    GETDATA_SUCCESS = '[DATA] -  Get Userdata Success',
    GETDATA_FAILURE = '[DATA] -  Get Userdata Failure',
}
export class GetUserData implements Action {
    readonly type = DataActionTypes.GETDATA;
    constructor(public payload: any = null) { }
}
export class GetUserDataSuccess implements Action {
    readonly type = DataActionTypes.GETDATA_SUCCESS;
    constructor(public payload: any) { }
}
export class GetUserDataFailure implements Action {
    readonly type = DataActionTypes.GETDATA_FAILURE;
    constructor(public payload: any) { }
}
export type All =
    | GetUserData
    | GetUserDataSuccess
    | GetUserDataFailure
