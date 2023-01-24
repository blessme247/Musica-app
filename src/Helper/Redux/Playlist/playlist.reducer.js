import { LOAD_PLAYLIST } from "./playlist.type";

const INITIAL_STATE = {
    playlists: []
}

const playlistReducer = (state = INITIAL_STATE, action) =>{
    const {playlists} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_PLAYLIST: 
        return {
            ...state,
            playlists: [payload]
        }
        default: 
        return state;
    }
}

export default playlistReducer;