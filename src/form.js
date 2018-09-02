import React from 'react';

const form=(props)=>
{ return(
    <div>
        <p>form is working </p>
        <form onSubmit={props.submit}>
            <input className="form-control row" type="text" placeholder='to-do' name="todo" />
            <button className='btn btn-success'>add</button>
        </form>
    </div>
)

}
export default form;