import React from 'react';
import './FirsComponent.module.css'
const FirstComponent = ({txt, image}) => {

    return (
        <div>
            <h2>
                {txt}
            </h2>
            <img src={image} alt=""/>


            <hr/>
        </div>
    );
};

export default FirstComponent;