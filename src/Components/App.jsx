import React, { useContext } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Left from './Left';
import Footer from './Footer';
import ThemeContext from '../Context/ThemeContext';

function App(){
    const [theme , changeTheme] = useContext(ThemeContext);
    return (
        <div className={theme === "light" ? "bg-light" : "bg-dark"} style={{
            transition:"all 1s"
        }}>
            <Navbar />
            <Slider />
            <Left />
            <Footer />
        </div>
        
    )
}
export default App;