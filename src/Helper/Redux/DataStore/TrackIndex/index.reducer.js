import { SET_TRACKINDEX } from "./index.type";

const INITIAL_STATE = {
   currentTrack: 0 
}

const currentTrackReducer = (state = INITIAL_STATE, action)=>{
    const {currentTrack} = state;
    const {type, payload} = action;

    switch (type) {
        case SET_TRACKINDEX: 
        return {
            ...state
        }
        
    }
    
}