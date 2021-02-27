import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


const Header = () => {
    const { books } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const Theme = isLightTheme ? dark : light;
    return ( 
        <div className="book-info text-center p-3 mt-1" style={{ color: Theme.textColor, background: Theme.bg }}>
            <h3>Books reading list</h3>
            <h5>You have <span className="text-primary">{ books.length}</span> books on your list.</h5>
        </div>
     );
}
 
export default Header;