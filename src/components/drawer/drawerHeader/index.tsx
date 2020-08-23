import React from 'react';
import { Classes, Icon} from '@blueprintjs/core';

const AppDrawerHeader = () => {
    return (
        <div className={Classes.DRAWER_HEADER}>
            <Icon icon="path-search" />
            <h4 className={Classes.HEADING}>Find It</h4>
        </div>
    )
};

export default AppDrawerHeader;