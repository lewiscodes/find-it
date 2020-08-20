import React from 'react';
import { useSelector } from 'react-redux';
import { IReduxStore } from '../../store/types';
import { Drawer, IDrawerProps } from '@blueprintjs/core';

const AppDrawer = () => {
    const device = useSelector((state: IReduxStore) => state.app.device);
    const drawerProps: IDrawerProps = {
        isOpen: true,
        hasBackdrop: false,
        title: 'Find It',
        position: device === 'DESKTOP' ? 'right' : 'bottom',
        size: Drawer.SIZE_SMALL,
        icon: 'path-search',
        isCloseButtonShown: device === 'MOBILE'
    };

    
    return (
        <Drawer {...drawerProps} />
    )
};

export default AppDrawer;