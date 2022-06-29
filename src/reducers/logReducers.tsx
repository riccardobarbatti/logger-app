import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_LOGS,
    UPDATE_LOG,
    SEARCH_LOGS,
    CLEAR_CURRENT
} from "../actions/types";
import {LogsModel} from "../models/LogsModel";

//Action
class Action<Payload> {
    constructor(payload: Payload) {
        this.type = this.constructor.name;
        //this.payload = payload;
        Object.assign(this, payload);
    }
    type: string;
    payload: Payload | undefined; // stub; needed for Is() method's type-inference to work, for some reason

}
const initialState = {
    logs:[],
    current: null,
    loading: false,
    error: null
}
export default (state = initialState, action:Action<any>) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs:[...state.logs.map((log:LogsModel) => log.id === action.payload.id ? action.payload : log)],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: [...state.logs.filter((log:LogsModel) => log.id !== action.payload)],
                loading: false
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return{
                ...state,
                error: action.payload
            };
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };

        default:
            return state;
    }
}
