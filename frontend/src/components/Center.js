import React from 'react';

const Center = ({children}) => {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
            {children}
        </div>
    );
};

export default Center;
