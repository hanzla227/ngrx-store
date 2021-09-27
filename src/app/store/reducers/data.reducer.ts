import { All, DataActionTypes } from "../actions/data.actions";


export interface State {
    initSuccess: boolean;
    error: string | null;
    objects: any;
    dataTemplate: any
}

export let initialState: State = {
    initSuccess: true,
    error: null,
    objects: undefined,
    dataTemplate: undefined
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        // Get All Objects Reducer
        case DataActionTypes.GETDATA: {
            console.log("initialState", initialState)
            return {
                ...state,
                initSuccess: false,
                objects: undefined
            };
        }
        case DataActionTypes.GETDATA_SUCCESS: {
            console.log("initialState", initialState)
            return {
                ...state,
                objects: action.payload,
                initSuccess: false,
            }
        }
        case DataActionTypes.GETDATA_FAILURE: {
            return {
                ...state,
                initSuccess: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}