import API from "../API/api";

const API_URL = 'orders';

export const list = async (search,filter) => {

    if(!search){
        search = "";
    }
    try {

        return await API.get(`${API_URL}/`);
    } catch (err) {
        return err.response.data;
    }
};

export const get = async (id) => {
    try {
        const data = await API.get(`${API_URL}/${id}`);
        console.log(data);
        return data;
    } catch (err) {
        return err.response.data;
    }
};

export const create = async (data) => {
    try {
        return await API.post(`${API_URL}/add`, data);
    } catch (err) {
        return err.response.data;
    }
};

export const update = async (id, data) => {
    try {
        return await API.put(`${API_URL}/update/${id}`, data);
    } catch (err) {
        return err.response.data;
    }
};

export const remove = async (id) => {
    try {
        return await API.delete(`${API_URL}/${id}`);
    } catch (err) {
        return err.response.data;
    }
};