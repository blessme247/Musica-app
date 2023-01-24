import { LOAD_PLAYLIST } from "./playlist.type"


export const loadPlaylist = (playlistArray) =>( dispatch )=> {
    dispatch({type: LOAD_PLAYLIST, payload: playlistArray})
}
