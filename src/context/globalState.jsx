import React, {createContext, useReducer} from "react"
import AppReducer from "../reducers/AppReducer";

// Initial state
const initialState = {
    transactions: [
        { id: 1, title: 'Flower', amount: -20 },
        { id: 2, title: 'Salary', amount: 300 },
        { id: 3, title: 'Book', amount: -10 },
        { id: 4, title: 'Camera', amount: 150 }
    ]
}

// Global context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState)
    // Actions
        const deleteTransaction = (id) => {
            dispatch({ 
                type: "DELETE_TRANSACTION",
                payload: id
            })
        }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}