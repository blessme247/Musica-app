import { combineReducers } from "redux";
import albumReducer from "./Album/album.reducer";
import chartsReducer from "./Charts/charts.reducer";
import audioqueueReducer from "./DataStore/AudioQueue/queue.reducer";
import playlistReducer from "./Playlist/playlist.reducer";
import popularReducer from "./Popular/popular.reducer";
import newReleasesReducer from "./Releases/releases.reducer";


const rootReducer = combineReducers({
    newReleaseStore: newReleasesReducer,
    playlistStore: playlistReducer,
    popularStore: popularReducer,
    chartsStore: chartsReducer,
    albumStore: albumReducer,
    audioqueueStore: audioqueueReducer,
})


export default rootReducer;