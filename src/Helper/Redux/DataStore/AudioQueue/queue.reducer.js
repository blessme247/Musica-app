import { LOAD_AUDIOQUEUE } from "./queue.type";

const INITIAL_STATE = {
    audioQueue: ""
}

const audioqueueReducer = (state = INITIAL_STATE, action) => {
    const {audioQueue} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_AUDIOQUEUE: 
        return {
            ...state,
            audioQueue: payload
        }
        default: 
        return state;
    }
}

export default audioqueueReducer;