import { LOAD_NEW_RELEASES } from "./releases.type";

const INITIAL_STATE = {
  newReleases: [],
};

const newReleasesReducer = (state = INITIAL_STATE, action) => {
  const {newReleases} = state;
  const { type, payload } = action;
  switch (type) {
    case LOAD_NEW_RELEASES:
      return {
        ...state,
        newReleases: [...payload],
      };
    default:
      return state;
  }
};

export default newReleasesReducer;
