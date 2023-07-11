import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
function TogglerButton(){
    const [theme , changeTheme] = useContext(ThemeContext);
    return(
        <div 
        style={{
            
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>

        <label class="switch">
        <input type="checkbox" onChange={(e)=>{
            if(e.target.checked){
                changeTheme("dark");
            }else{
                changeTheme("light")
            }
        }}/>
        <span className="slider round"></span>
        </label>
        </div>
    )
}
export default TogglerButton;