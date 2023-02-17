import axiosInstance from "../../utils/axios";
import { axios } from "axios";

export const getVideo = async (id) => {
    const res = await axiosInstance.get(`/videos/${id}`);
    return res.data;
};
