import React from 'react';
import './footer.css';


function Footer (){
    return(
        <footer className='footer'>
            <ul>
                <li>
                   <img src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" alt="" /> 
                </li>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/1051/1051377.png" alt="" />
                </li>
            </ul>
            <p>&copy; 2022</p>
        </footer>
    )
}

export default Footer;