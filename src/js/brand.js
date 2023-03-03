import axios from "axios"
import * as config from '../config/config.json';
import { getHeaders } from "./helper";

export const brandlist = async (data) => {
    return axios.get(`${config.adminUrl}/v1/brands`, {
        headers:getHeaders(),
        params:{
            ...data,
        },
    }).then((data) => {
        return data.data;
    })
}

export const brandCreate = async (data) => {
    return axios.post(`${config.adminUrl}/v1/brands`,{
        ...data
    },{
        headers:getHeaders(),
    }).then((data) => {
        return data.data;
    });
}