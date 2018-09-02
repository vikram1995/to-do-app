import React from 'react';

const display=(props)=>
{ 
    const q=props.array.map((a,index)=>{
        return <li key={index}>{a}</li>
    })
    return(
    <div>
         <p> display is working </p>
         <ol>
            {q} 
         </ol>

    </div>
)

}
export default display;

