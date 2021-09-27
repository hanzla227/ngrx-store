import { createFeatureSelector } from '@ngrx/store';
import * as dataTemplate from './reducers/data.reducer';

export interface AppState {
    dataTemplate: dataTemplate.State;
}

export const reducers = {
    dataTemplate: dataTemplate.reducer,
};

export const selectDataState = createFeatureSelector<AppState>('dataTemplate');