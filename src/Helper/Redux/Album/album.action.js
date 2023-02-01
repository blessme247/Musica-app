import { LOAD_ALBUM } from "./album.type"

export const loadAlbum = (albumObject) =>(dispatch)=> {
    dispatch({type: LOAD_ALBUM, payload: albumObject})
}