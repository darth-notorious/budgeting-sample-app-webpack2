import React from 'react';
import './style.css';

export default function Button({ text, onClick, type = 'default', style, block }){
    return (
        <button
            className={`button button-${type} ${ !!block && 'u-full-width' }`}
            style={ style }
            onClick={ onClick }
        >
            { text }
        </button>
    );
}