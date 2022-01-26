import React, {createContext, useState} from 'react'

export const Context = createContext()

const ContextProvider = props => {
    

    const supportedLangs = ['ES', 'FR', 'EN']

    let browserLang = navigator.language.slice(0,2).toUpperCase()

    if(supportedLangs.indexOf(browserLang) === -1) {
        browserLang = "EN"
    } 

    const [lang, setLang] = useState(browserLang)

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

