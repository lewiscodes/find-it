import { IAppAction, IAppState } from '../../types/app';

const defaultState: IAppState = {
    name: 'Find It',
    device: 'DESKTOP'
};

const defaultAction: IAppAction = {
    type: '@@INIT'
};

export default (state: IAppState = defaultState, action: IAppAction = defaultAction): IAppState => {
    switch (action.type) {
    case 'SET_DEVICE':
        return {
            ...state,
            device: action.width! >= 700 ? 'DESKTOP' : 'MOBILE'
        }
    default:
        return state;
    }
};
