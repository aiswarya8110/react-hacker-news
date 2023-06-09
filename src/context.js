import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_STORIES } from './actions';

export const AppContext = createContext();

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {loading: true, query: "react", hits: [], page: 0, nbPages : 0};

export function AppContextProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loading, query, hits, page, nbPages } = state;

    async function fetchStories(){
        dispatch({type: SET_LOADING});
        try{
           const response = await fetch(`${API_ENDPOINT}query=${query}&page=${page}`);
           const data = await response.json();
           dispatch({type: SET_STORIES, payload: {hits: data.hits, nbPages: data.nbPages}})
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchStories();
    },[query, page]);

    return <React.Fragment> 
        <AppContext.Provider value={{loading, query, hits, page, nbPages, dispatch}}>
        {props.children}
    </AppContext.Provider>
    </React.Fragment>
}