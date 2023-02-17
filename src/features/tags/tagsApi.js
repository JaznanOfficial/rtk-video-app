import axiosInstance from "../../utils/axios";
import { axios } from "axios";

export const getTags = async () => {
    const res = await axiosInstance.get("/tags");
    return res.data;
};
