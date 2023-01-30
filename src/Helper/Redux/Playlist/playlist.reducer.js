import { LOAD_PLAYLIST } from "./playlist.type";

const INITIAL_STATE = {
    playlist: {}
}

const playlistReducer = (state = INITIAL_STATE, action) =>{
    const {playlist} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_PLAYLIST: 
        return {
            ...state,
            playlist: payload
        }
        default: 
        return state;
    }
}

export default playlistReducer;