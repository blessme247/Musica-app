import { LOAD_PLAYLIST } from "./playlist.type"


export const loadPlaylist = (playlistObject) =>( dispatch )=> {
    dispatch({type: LOAD_PLAYLIST, payload: playlistObject})
}
