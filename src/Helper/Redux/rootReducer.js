import { combineReducers } from "redux";
import playlistReducer from "./Playlist/playlist.reducer";
import popularReducer from "./Popular/popular.reducer";
import newReleasesReducer from "./Releases/releases.reducer";


const rootReducer = combineReducers({
    newReleaseStore: newReleasesReducer,
    playlistStore: playlistReducer,
    popularStore: popularReducer
})


export default rootReducer;