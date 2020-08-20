import { IAppState } from './app';

export interface IReduxStore {
    readonly app: IAppState;
};
