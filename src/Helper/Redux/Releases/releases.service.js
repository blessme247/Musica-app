import axiosInstance from "../AxiosConfig/axiosConfig";

const fetchNewReleases = async () => {
  try {
    const response = await axiosInstance.get("/editorial/2/releases");
    let { data } = response.data;

    return data;
  } catch (error) {}
};

const NewReleaseServices = {
  fetchNewReleases,
};

export default NewReleaseServices;
