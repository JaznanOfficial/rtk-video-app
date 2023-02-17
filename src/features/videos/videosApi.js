import axiosInstance from "../../utils/axios";
import { axios } from "axios";

export const getVideos = async () => {
    const res = await axiosInstance.get("/videos");
    return res.data;
};
