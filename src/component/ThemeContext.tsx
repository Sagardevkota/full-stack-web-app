import React, {useState} from "react";

export const ThemeContext = React.createContext({
    'darkTheme':false,
    'lang':'en'
});


interface IProps{
    children:any
}

export const ThemeProvider = (props:IProps) =>{
    
    return (<ThemeContext.Provider value={{'darkTheme':false, 'lang':'en'}} >
            {props.children}
    </ThemeContext.Provider>);
}