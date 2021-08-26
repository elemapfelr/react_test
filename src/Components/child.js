import React from 'react';


function Child({color,name,isSpecial}){
    return(
        <div style={{color}}>
            { isSpecial ? <b>*</b> : null }
            안녕하세요{name}
        </div>
    )
}

// function Child(props){
//     return(
//         <div style={{color:props.color}}>
//             안녕하세요{props.name}
//         </div>
//     )
// }

Child.defaultProps={
    name:'이름없음',
    color:'blue'
}

export default Child;