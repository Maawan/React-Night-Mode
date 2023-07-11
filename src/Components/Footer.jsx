import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
function Footer(){
    const [theme , changeTheme] = useContext(ThemeContext);
    return(
<footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p className={theme === "light" ? "text-dark" : "text-light"}>© 2022-2023 HayatSoftware, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>
    )
}
export default Footer;