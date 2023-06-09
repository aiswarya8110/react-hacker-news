import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from './actions';

export default function reducer(state, action){
    if(action.type === SET_LOADING){
        return {...state, loading: true}
    }
    if(action.type === SET_STORIES)
    return {...state, loading: false, hits: action.payload.hits, nbPages: action.payload.nbPages}

    if(action.type === REMOVE_STORY)
    return {...state, hits: state.hits.filter((story)=> story.objectID !== action.payload)}

    if(action.type === HANDLE_SEARCH)
    return {...state, query: action.payload, page: 0 }

    if(action.type === HANDLE_PAGE){
        if(action.payload === "dec"){
            let prevPage = state.page - 1;
            if(prevPage < 0){
                prevPage = state.nbPages - 1;
            }

            return {...state, page: prevPage}
        }

        if(action.payload === "inc"){
            let nextPage = state.page + 1;
            if(nextPage > state.nbPages - 1){
                nextPage = 0;
            }

            return {...state, page: nextPage}
        }
    }

    else
    return state;
}


// case SET_LOADING:
//             return {...state, loading: true}
//         case SET_STORIES:
//             return {...state, loading: false, hits: action.payload.hits, nbPages: action.payload.nbPages}
//         case REMOVE_STORY:
//             const newArray = state.hits.filter((story)=> story.objectID !== action.payload);

//             return {...state, hits: newArray};
//         case HANDLE_SEARCH:
//             return {...state, query: action.payload}
//         default:
//             return state;