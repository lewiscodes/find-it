import { IAppAction } from '../types/app'

export const setDevice = (width: number): IAppAction => {
    return {
        type: 'SET_DEVICE',
        width
    }
}