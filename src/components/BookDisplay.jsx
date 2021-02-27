import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDisplay = () => {
    const { books, deleteBooks } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const Theme = isLightTheme ? dark : light;

    return books.length ? ( 
        <div className="book-list p-3" style={{ color: Theme.textColor, background: Theme.bg }}>
            <ul className="list-group">
                {books.map((book) => {
                    return (
                        <li className="list-group-item m-2" key={book.id} style={{ background: Theme.ui }}>
                            <div className="book-info pl-4">
                                <div className="book-title">Title:
                                 <span className="text-capitalize">{book.Title}</span>
                                </div>
                                <div className="book-author is-capitalized">Author:
                                 <span className="text-capitalize">{book.Author}</span>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-sm ml-4" onClick={() => {
                                deleteBooks(book.id)
                            }}>Delete Book</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : (
            <div className="text-center text-primary empty mt-4">
                <p>No books left to read. Enjoy your free time.</p>
            </div>
    )
    
}
 
export default BookDisplay;