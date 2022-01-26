import React, {createContext, useState} from 'react'

export const Context = createContext()

const ContextProvider = props => {
    

    const supportedLangs = ['EN', 'FR', 'ES']

    let browserLang = navigator.language

    

    const [lang, setLang] = useState('EN')

    const ToggleLang = changeLang => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, ToggleLang}}>

            {props.children}
        
        </Context.Provider>
    )
}

export default ContextProvider

