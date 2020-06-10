import {useReducer} from 'react'

import {
    DELETE_TRANSACTION
} from "../constants"

// Actions
const deleteTransaction = (id) => {
    dispatch({ 
        type: "DELETE_TRANSACTION",
        payload: id
     })
}

export {deleteTransaction}