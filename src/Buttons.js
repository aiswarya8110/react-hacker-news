import React from 'react';
import { AppContext } from './context';
import { HANDLE_PAGE } from './actions';

class Buttons extends React.Component{
    render(){
        return (
            <div className="btn-container">
                <button disabled={this.context.loading} onClick={()=> this.context.dispatch(
                    {type: HANDLE_PAGE, 
                    payload: "dec"})}>
                        prev
                    </button>
                <p>{this.context.page + 1} of {this.context.nbPages}</p>
                <button disabled={this.context.loading} onClick={()=> this.context.dispatch(
                    {type: HANDLE_PAGE, 
                    payload: "inc"})}>
                        next
                    </button>
            </div>
        )
    }
}

Buttons.contextType = AppContext;

export default Buttons;