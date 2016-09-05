import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


App.propTypes = {
    test: React.PropTypes.string,
    hisoka: React.PropTypes.string,
    poipo: React.PropTypes.number.isRequired
}

ReactDOM.render(
    <div>
        <App poipo={3} test="This is my first property" hisoka="This is the second properties...;)"/>

    </div>
    , document.getElementById('app'))