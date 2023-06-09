import React from 'react';
import { AppContext } from './context';
import { REMOVE_STORY } from './actions';

class Stories extends React.Component{
    render(){
        if(this.context.loading)
        return <div className="loading"/>

        else{
            return (
                <section className="stories">
                    {this.context.hits.map((story)=>{
                        const { objectID, title, author, points, url, num_comments } = story;
                        return (
                        <article key={objectID} className="story">
                            <h4 className="title">{title}</h4>
                            <p className="info">
                                {points} points by <span>{author}</span> | {num_comments} comments
                            </p>
                            <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">read more</a>
                            <button className="remove-btn" onClick={()=> this.context.dispatch({type: REMOVE_STORY, payload: objectID})}>remove</button>
                        </article>
                        )
                    })}
                </section>
            )
        }
    }
}




Stories.contextType = AppContext;

export default Stories;