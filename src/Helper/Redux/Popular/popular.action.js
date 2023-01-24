import { LOAD_POPULAR } from "./popular.type"

export const loadPopular = (popularArray) =>( dispatch )=> {
    dispatch({type: LOAD_POPULAR, payload: popularArray})
}