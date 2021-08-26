import React from 'react';

function Parent({children}){
    const style={
        border:'3px solid',
        padding: '2rem',
    }
    return(
        <div style={style}>
            {children}
        </div>
    )
}

export default Parent;