import axiosInstance from "../AxiosConfig/axiosConfig"

const fetchCharts = async () => {
    try {
        const response = await axiosInstance.get("/chart/0/playlists?index=0&limit=3") 
        //the index and limit params above allows us to paginate the response..
        //index represents the firts object to get and limit represents how many objects to get
        let {data} = response.data;
        console.log(response, "CHARTS in service")
        return data;
    } catch (error) {
        console.log(error)
    }
}



const ChartsServices = {
    fetchCharts
}

export default ChartsServices;