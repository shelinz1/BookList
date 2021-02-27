import React, { Component } from 'react';

export const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLightTheme: true,
            light: { textColor: '#555', bg: '#eee', ui: '#ddd' },
            dark: { textColor: '#ddd', bg: '#555',ui:'#333'}
        }
    }

    toggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });
    
    render() { 
        return ( 
            <ThemeContext.Provider value={{ ...this.state, buttonToggle: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;