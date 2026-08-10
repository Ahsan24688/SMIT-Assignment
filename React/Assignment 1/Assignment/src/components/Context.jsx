import { createContext, use, useState, useEffect } from 'react';



export const ThemeContext = createContext("light");


// let getInitialTheme = () => {
//     if (typeof window !== "undefined" && localStorage.getItem("theme")) {
//         return localStorage.getItem("theme");
//     }
//     // return "light";
//     const isdarkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return isdarkmode ? "dark" : "light";
// }

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    // useEffect(() => {
    //     document.body.className = theme;
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider