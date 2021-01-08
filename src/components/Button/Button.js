import React from 'react';
import { ImSpinner6 } from 'react-icons/im';
import s from './Button.module.css';

function Button({ onClickFetch = null, type = 'more', show = true }) {
    // if (show === false) {return <></>}
    if (type === 'hidden') {return <></>}
    if (type === 'more') {
        return <button className={s.button} type="button" onClick={onClickFetch}>Load More</button>;
    }
    if (type === 'spinner') {
        return <ImSpinner6 size="36" className={s.iconSpin} />;
    }
    if (type === 'loading') {
        return (
            <button className={s.button} type="button">
                <span>
                    <ImSpinner6 size="16" className={s.iconSpinBtn} />
                </span>
                <span>Loading...</span>
            </button>)
    }
}

export default Button;