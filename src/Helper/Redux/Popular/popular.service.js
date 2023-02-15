import axiosInstance from "../AxiosConfig/axiosConfig";

const fetchPopular = async () => {
  try {
    const response = await axiosInstance.get("/chart/0/albums");
    let { data } = response.data;

    return data;
  } catch (error) {}
};

const PopularServices = {
  fetchPopular,
};

export default PopularServices;
