import { Action } from '@ngrx/store';

export enum DataActionTypes {
    AddData = 'Add',
}

export class ActionEx implements Action {
    readonly type;
    constructor(public payload: any) { }
}

/**
 *defining action for adding data
 */
export class AddData implements Action {
    readonly type = DataActionTypes.AddData
    constructor(public payload: any) { }
}