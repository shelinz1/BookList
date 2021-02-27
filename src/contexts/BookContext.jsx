import React, { useState, useEffect } from 'react';

export const BookContext = React.createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
    ]);

    useEffect(() => {
        const localBooks = JSON.parse(localStorage.getItem('books'));
        if (localBooks) {
            setBooks(localBooks)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    },[books])


    const addBooks = (Title, Author) => {
        setBooks([...books, { Title: Title, Author: Author, id: books.length }]);
    }

    const deleteBooks = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{ books, addBooks, deleteBooks }}>
            {props.children}
        </BookContext.Provider> 
    )
}
 
export default BookContextProvider;