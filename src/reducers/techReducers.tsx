import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from '../actions/types';
import {TechModel} from '../models/TechModel'

const initialState = {
    techs: [],
    loading: false,
    error: null
};

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

export default (state = initialState, action:Action<any>) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs:[...state.techs.filter((tech:TechModel) => tech.id !== action.payload)],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TECHS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
