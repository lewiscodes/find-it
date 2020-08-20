import { createStore, combineReducers, applyMiddleware, compose, AnyAction, Store } from 'redux';
import thunk from 'redux-thunk';
import { IReduxStore } from './types';
import { appReducer } from './reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

let composeEnhancers: typeof compose = compose;

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
export let store: Store<IReduxStore, AnyAction> & { dispatch: unknown };

const configureStore = (): Store<IReduxStore> => {
    store = createStore(
        combineReducers<IReduxStore>({
            app: appReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;
