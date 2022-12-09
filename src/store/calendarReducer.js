import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../constants/actions";

const defaultState = {
    actions: []
};

export const calendarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {...state, actions: [...state.actions, action.payload]};
        case REMOVE_FROM_LIST:
            return {...state, actions: [...state.actions.filter(item => item.id !== action.payload.id)]};
        default: 
            return state;      
    }
};

export const addToListAction = (payload) => ({type: ADD_TO_LIST, payload});
export const removeFromListAction = (payload) => ({type: REMOVE_FROM_LIST, payload});
