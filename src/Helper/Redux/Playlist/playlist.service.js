import axiosInstance from "../AxiosConfig/axiosConfig"


const fetchPlaylists = async () => {
    try {
        const response = await axiosInstance.get("/playlist/6059358144")
        // let {data} = response.data;

        console.log(response, "playlists")
        
        return response;
    } catch (error) {
        console.log(error)
    }
}

const PlaylistServices = {
    fetchPlaylists
}

export default PlaylistServices;