import { LOAD_NEW_RELEASES } from "./releases.type"

export const loadNewReleases = (releasesArray) =>( dispatch )=> {
    dispatch({type: LOAD_NEW_RELEASES, payload: releasesArray})
}
