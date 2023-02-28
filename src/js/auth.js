import axios from "axios"
import * as config from '../config/config.json';
import { setStorageData, setToken } from "./helper";

export const login = async (data) => {
    return axios.post(`${config.adminUrl}/v1/login`,{
        ...data
    }).then((data) => {
        data = data.data;
       setToken(data.token)
        return data
    }).catch((error) => {
        return error.response.data
    });
}