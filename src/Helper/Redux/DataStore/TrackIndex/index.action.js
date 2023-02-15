import { SET_TRACKINDEX } from "./index.type"

export const setTrackIndex = (index) => (payload)=>{
    dispatchEvent({type: SET_TRACKINDEX, payload: index})
}