import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { buttonToggle } = useContext(ThemeContext);
    return ( 
        <div>
            <button className="btn btn-warning btn-sm mt-2 mb-2 toggle" onClick={buttonToggle}>Change App Theme</button>
        </div>
     );
}
 
export default ThemeToggle;