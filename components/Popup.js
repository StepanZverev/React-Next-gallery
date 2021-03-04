import classes from '../styles/Popup.module.scss';
import React, { useState, useEffect } from 'react';

const Popup = ({ photos, initPhotoIndex, visible, onClose }) => {

    const [activePhotoIndex, setActivePhotoIndex] = useState();

    useEffect(() => {
        setActivePhotoIndex(initPhotoIndex);
    }, [initPhotoIndex]);

    if (!visible) return null;

    return (
        <div className={classes.wrapper}>
            {activePhotoIndex === 0 ?
                <div className={classes.disabled_arrow}>
                    ◀
                </div>
                :
                <div
                    className={classes.prev}
                    onClick={() => setActivePhotoIndex(activePhotoIndex - 1)}
                >
                    ◀
                </div>
            }
            <div className={classes.content}>
                {photos[activePhotoIndex] !== undefined ?
                    <img src={photos[activePhotoIndex].url} />
                    :
                    null
                }
            </div>
            {activePhotoIndex === photos.length - 1 ?
                <div className={classes.disabled_arrow}>
                    ▶
                </div>
                :
                <div
                    className={classes.next}
                    onClick={() => setActivePhotoIndex(activePhotoIndex + 1)}
                >
                    ▶
                </div>
            }
            <span className={classes.close} onClick={() => { onClose(); setActivePhotoIndex(null) }}>✖</span>
        </div>
    )
}


export default Popup