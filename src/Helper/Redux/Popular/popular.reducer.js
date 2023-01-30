import { LOAD_POPULAR } from "./popular.type";

const INITIAL_STATE = {
    popularSongs: []
}

const popularReducer = (state = INITIAL_STATE, action) =>{
    const {popularSongs} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_POPULAR: 
        return {
            ...state,
            popularSongs: [...payload]
        }
        default: 
        return state;
    }
}

export default popularReducer;