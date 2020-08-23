import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { IReduxStore } from '../../store/types';
import { Classes } from '@blueprintjs/core';
import cx from '../../utils/classnames';
import AppDrawerHeader from './drawerHeader';

const AppDrawer = ({ children }: { children: ReactElement }) => {
    const device = useSelector((state: IReduxStore) => state.app.device);
    const drawerClasses: string = cx([
        { [Classes.DRAWER]: true },
        { [Classes.OVERLAY_CONTENT]: true },
        { [Classes.POSITION_RIGHT]: device === 'DESKTOP' },
        { [Classes.POSITION_BOTTOM]: device=== 'MOBILE' }
    ]);
    
    return (
        <React.Fragment>
            <div
                className={drawerClasses}
                style={{ width: device === 'DESKTOP' ? 360 : '100%' }}
            >
                <AppDrawerHeader />
                <div className={Classes.DRAWER_BODY}>
                    { children }
                </div>
            </div>
        </React.Fragment>
    )
};

export default AppDrawer;