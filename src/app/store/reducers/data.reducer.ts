import { ActionEx, DataActionTypes } from '../actions/data.actions';
export const initialState = [];
/**
 * function for annual data reducer 
 */
export function DataReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case DataActionTypes.AddData:
            return state.concat(action.payload);
        default:
            return state;
    }
}
