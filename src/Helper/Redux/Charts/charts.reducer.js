import { LOAD_CHARTS } from "./charts.type";

const INITIAL_STATE = {
    charts: []
}

const chartsReducer = (state = INITIAL_STATE, action) => {
    const {charts} = state;
    const {type, payload} = action;

    switch (type) {

        case LOAD_CHARTS:
            return {
                ...state,
                charts: [...payload]
            }
            default: 
            return state;
    }
}

export default chartsReducer;