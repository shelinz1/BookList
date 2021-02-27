import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookContextProvider from './contexts/BookContext';
import BookDisplay from './components/BookDisplay';
import BookForm from './components/BookForm';
import Header from './components/Header';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="App container mt-3">    
        <Navbar/>
        <Route exact path="/" render={props => (
          <div>          
            <ThemeContextProvider>
              <BookContextProvider>  
                <ThemeToggle />              
                <Header />                
                <BookDisplay />       
                <BookForm />                 
              </BookContextProvider>              
            </ThemeContextProvider>
          </div>
        )} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App;