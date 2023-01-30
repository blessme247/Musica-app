import { LOAD_CHARTS } from "./charts.type"

export const loadCharts = (chartsArray) =>( dispatch )=> {
    dispatch({type: LOAD_CHARTS, payload: chartsArray})
}