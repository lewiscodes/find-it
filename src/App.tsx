import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Drawer from './components/drawer';
import debounce from 'lodash.debounce';
import { setDevice } from './store/actions/app';

const App = () => {
    useEffect(() => {
        window.addEventListener('resize', debounce(handleResizeEvent, 250));
        return () => window.removeEventListener('resize', debounce(handleResizeEvent, 250));
    });

    const dispatch = useDispatch();
    const handleResizeEvent = () => {
        dispatch(setDevice(window.innerWidth));
    }

    return (
        <React.Fragment>
            <div>React App</div>
            <Drawer />
        </React.Fragment>
    );
};

export default App;