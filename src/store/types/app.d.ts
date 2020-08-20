export type TDevice = 'MOBILE' | 'DESKTOP';

export interface IAppState {
    readonly name: string;
    readonly device: TDevice
}

export interface IAppAction {
    type: '@@INIT' | 'SET_DEVICE';
    width?: number;
}
