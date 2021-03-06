import axios from 'axios';
import { GET_LOGS,
         SET_LOADING,
         LOGS_ERROR,
         ADD_LOG,
         DELETE_LOG,
         UPDATE_LOG,
         SEARCH_LOGS,
         SET_CURRENT,
         CLEAR_CURRENT} from "./types";

//import {LogsModel} from "../models/LogsModel";
import {Dispatch} from "@reduxjs/toolkit";
interface Logger{
    id?: number,
    log: []

}
//GET LOGS FROM SERVER
export const getLogs = () => async (dispatch: Dispatch) => {

        try {
            setLoading();
            const {data} = await axios.get(`logs`);

            dispatch({
                type: GET_LOGS,
                payload: data
            });

        } catch (err:any) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            });

        }
};
//ADD new LOG
export const addLog = (log:[]) => async (dispatch: Dispatch) => {

    try {
        //preload
        setLoading();

        const {data} = await axios.post(`logs`, log);
        // const res = await fetch('/logs');
        //const {data} = await res;

        //let toJSON = JSON.parse(data);

        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch (err:any) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
};
//UPDATE new LOG
export const updateLog = (log:Logger) => async (dispatch: Dispatch) => {

    try {
        //preload
        setLoading();

        const {data} = await axios.put(`logs/${log.id}`, log);

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });

    } catch (err:any) {

        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
};

//DELETE LOGS FROM SERVER
export const removeLog = (id: number) => async (dispatch: Dispatch) => {

    try {
        setLoading();

        await axios.delete(`logs/${id}`);

        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch (err:any) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
};
//SEARCH LOGS FROM SERVER
export const searchLogs = (text: string) => async (dispatch: Dispatch) => {

    try {
        setLoading();
        const {data} = await axios.get(`logs?q=${text}`);

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });

    } catch (err:any) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });

    }
};


//SET STATUS
// Set current log
export const setCurrent = (log: number) => {
    return {
        type: SET_CURRENT,
        payload: log
    };
};

// Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
};
// Set loading to ture
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
