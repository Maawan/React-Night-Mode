import React from 'react';
import App from './App';
import ThemeContext from '../Context/ThemeContext';
function Wrapper(){
    const themeHook = React.useState("light");
    return (
        <ThemeContext.Provider value={themeHook}>
            <App />
        </ThemeContext.Provider>
    )
}
export default Wrapper;