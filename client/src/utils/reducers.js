import { useReducer} from 'react';

import {TOGGLE_NAV, CURRENT_USER} from "./actions";

export const reducer = (state, action ) => {
    switch(action.type) {
        case TOGGLE_NAV:
            return{
                ...state,
                navActive: !state.navActive
            };
        case CURRENT_USER:
            return{
                ...state,
                loggedinUser: action.loggedinUser
            }
            default:
                return state;
    }
};

export function useProductReducer(initialState) {
          return useReducer(reducer, initialState);
      }