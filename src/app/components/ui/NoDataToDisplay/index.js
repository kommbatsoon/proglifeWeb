import React from 'react';
import style from './styles.scss';

const NoDataToDisplay = ({text, textConfig, className, imageClassName, textClassName}) => {

    const wrapperClass = style.wrapper + ' ' + className || '';
    const imageClass = style.image + ' ' + imageClassName || '';
    const textClass = style.text + ' ' + textClassName || '';

    return (
        <div className={wrapperClass}>
            <div className={imageClass}/>
            <div className={textClass}>
                {text || textConfig.noData}
            </div>
        </div>
    );
};

export default NoDataToDisplay;

