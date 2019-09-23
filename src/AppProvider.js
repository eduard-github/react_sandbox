import React, { useReducer } from 'react'
import MainContext from './MainContext'
import reducer from './components/child/container/reducer'
import ChildPerformances from './components/child/container/performances'

const AppProvider = ({ children }) => {

    const initialValue = {
        name: 'Ed'
    }

    const [state, dispatch] = useReducer(reducer, initialValue )


    const myInitialState = {
        ...state,
        ...ChildPerformances(dispatch)
    }

    return (
        <MainContext.Provider value={myInitialState}>
            {children}
        </MainContext.Provider>
    )
}

export default AppProvider
