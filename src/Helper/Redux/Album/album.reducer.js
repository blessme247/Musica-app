import { LOAD_ALBUM } from "./album.type";

const INITIAL_STATE = {
    album: {}
}

const albumReducer = (state = INITIAL_STATE, action) => {
    const {album} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_ALBUM: 
        return {
            ...state,
            album: payload
        }
        default: 
        return state;
    }
}

export default albumReducer;