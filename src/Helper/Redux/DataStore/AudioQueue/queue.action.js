import { LOAD_AUDIOQUEUE } from "./queue.type"

export const loadAudioQueue = (musicQueue) => (dispatch) => {
    dispatch({type: LOAD_AUDIOQUEUE, payload: musicQueue})
}