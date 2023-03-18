import { createContext,useReducer,useContext } from "react";
export const StateProvider=createContext()
export const DataLayer=({reducer,initialState,children})=>(
   <StateProvider.Provider value={ useReducer(reducer,initialState)} >
        {children}

    </StateProvider.Provider>

);
export const useDataLayer=()=>useContext(StateProvider)
