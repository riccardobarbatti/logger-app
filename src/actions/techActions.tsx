import axios from "axios";
import {setLoading} from "./logActions";
import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR, CLEAR_CURRENT, DELETE_LOG, LOGS_ERROR, SET_CURRENT
} from "../actions/types";

import { TechModel } from "../models/TechModel";

//GET LOGS FROM SERVER
export const getTechs = () => async (dispatch:any) => {

    try {
        setLoading();
        const {data} = await axios.get(`techs`);


        dispatch({
            type: GET_TECHS,
            payload: data
        });

    } catch (err:any) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        });

    }
};
//Add Tech with axios
export const addTech = (tech:any) => async (dispatch:any) => {

    try {
        setLoading();
        const {data} = await axios.post(`techs`, tech);


        dispatch({
            type: ADD_TECH,
            payload: data
        });

    } catch (err:any) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        });

    }
};

//DELETE LOGS FROM SERVER
export const removeTech = (id:any) => async (dispatch:any) => {

    try {
        setLoading();

        await axios.delete(`techs/${id}`);

        dispatch({
            type: DELETE_TECH,
            payload: id
        });

    } catch (err:any) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
};
