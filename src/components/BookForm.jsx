import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
    const { addBooks } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const Theme = isLightTheme ? dark : light;

    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooks(Title, Author);
        setTitle('');
        setAuthor('');
    };

    return ( 
        <div className="mt-1 p-3" style={{color: Theme.textColor, background: Theme.bg }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" required className="form-control" value={Title} onChange={(event)=>setTitle(event.target.value)} placeholder="Enter Title"/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" required className="form-control" value={Author} onChange={(event)=>setAuthor(event.target.value)} placeholder="Enter Author"/>
                </div>
                <button className="btn btn-primary addbook">Add Books</button>
            </form>
        </div>
     );
}
 
export default BookForm;