import React, { createRef } from 'react';
import { AppContext } from './context';
import { HANDLE_SEARCH } from './actions';

class SearchForm extends React.Component{

    inputRef = createRef();

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render(){
        return (
            <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
                <h2>Search Hacker News</h2>
                <input type="text" ref={this.inputRef} value={this.context.query} className="form-input"
                onChange={(e)=> this.context.dispatch({type: HANDLE_SEARCH, payload: e.target.value})}/>
            </form>
        )
    }
}

SearchForm.contextType = AppContext;

export default SearchForm;