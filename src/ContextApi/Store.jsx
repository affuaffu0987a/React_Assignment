import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [Queries, setQueries] = useState('new')
    const [Loader, setLoader] = useState(true)

    return (
        <AppContext.Provider value={{ Queries, setQueries, Loader, setLoader }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext }