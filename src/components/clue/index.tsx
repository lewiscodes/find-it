import React, { useState } from 'react';
import { Card, Elevation, Icon } from '@blueprintjs/core';
import styles from './styles.module.scss';
import cx from '../../utils/classnames';

const Clue = () => {
    const [hovering, setHovering] = useState(false);
    const [clicking, setClicking] = useState(false);
    const helpIconClasses = cx([
        { [styles.icon]: true },
        { [styles.iconRotate]: true }
    ]);
    const textClasses = cx([
        { [styles.text]: true },
        { [styles.textHover]: hovering }
    ]);
    const cardElevation = () => {
        if (clicking) {
            return Elevation.ONE;
        }

        if (hovering) {
            return Elevation.TWO;
        }

        return Elevation.THREE;
    }


    return (
        <div className={styles.clueContainer}>
            <Card
                elevation={cardElevation()}
                className={styles.clue}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onMouseDown={() => setClicking(true)}
                onMouseUp={() => setClicking(false)}
            >
                <div className={styles.diamond}>
                    <Icon icon="help" className={helpIconClasses} />
                </div>
                <h3 className={textClasses}>Click to reveal clue</h3>
                <Icon icon="chevron-right" className={styles.icon} iconSize={30} />
            </Card>
        </div>
    );
}

export default Clue;